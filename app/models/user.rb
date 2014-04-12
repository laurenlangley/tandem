class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :registerable
  devise :omniauthable, :omniauth_providers => [:facebook]



  def self.find_for_facebook_oauth(auth)
    Rails.logger.debug auth
    u = User.where(auth.slice(:provider, :uid)).first_or_create do |user|
      user.provider   = auth.provider
      user.uid        = auth.uid
    end

    u.email         = auth.info.email
    u.name          = auth.info.name   
    u.image         = auth.info.image 

    u.json          = "{}" if u.json.nil?
    json = JSON.parse( u.json )
    json[:gender]   = auth.extra.raw_info.gender
    json[:age]      = ( (Date.today - Date.parse( auth.extra.raw_info.birthday )).to_i / 365 )
    u.json          = json.to_json
    u.save
    u

  end
end
