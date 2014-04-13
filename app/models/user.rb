class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :registerable
  devise :omniauthable, :omniauth_providers => [:facebook]


  def data
    JSON.parse(json)
  end

  def image_large
    image + "?type=large"
  end

  def calculate_score( other_user )
    doc       = JSON.parse( json ).with_indifferent_access
    other_doc = JSON.parse( other_user.json ).with_indifferent_access
    
    total   = 0
    points  = 0
    other_doc.slice(:location, :speed, :skill, :scene, :availability, :looking_for).each do |thing_key, thing|
      thing.each do |k, v|
        next unless doc[thing_key].present? && doc[thing_key][k].present?
        total += 1
        points += 1 if doc[thing_key][k] == v
      end
    end

    return 0 if total == 0
    ( 100 * (points / total.to_f) ).round
  end

  def self.find_for_facebook_oauth(auth)
    u = User.where( auth.slice(:provider, :uid) ).first_or_create do |user|
      user.provider   = auth.provider
      user.uid        = auth.uid
    end

    u.email         = auth.info.email
    u.name          = auth.info.name   
    u.image         = auth.info.image 

    u.json          = "{}" if u.json.nil?
    json = JSON.parse( u.json )
    json[:gender]   = auth.extra.raw_info.gender if auth.extra.raw_info.gender.present?
    json[:first_name] = auth.info.first_name if auth.info.first_name.present?
    json[:location] = auth.info.location if auth.info.location.present?

    begin
      d = Date.parse( auth.extra.raw_info.birthday )
      json[:age]      = ( (Date.today - d).to_i / 365 )
    rescue
      nil
    end

    u.json          = json.to_json
    u.save
    
    u
    
  end
end
