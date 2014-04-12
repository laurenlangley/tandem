class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :registerable
  devise :omniauthable, :omniauth_providers => [:facebook]


  def self.find_for_facebook_oauth(auth)
    Rails.logger.debug auth
    Rails.logger.debug auth.info.birthday
    Rails.logger.debug auth.extra.birthday
    Rails.logger.debug auth.birthday
    where(auth.slice(:provider, :uid)).first_or_create do |user|
      user.provider   = auth.provider
      user.uid        = auth.uid
      user.email      = auth.info.email
      user.name       = auth.info.name   # assuming the user model has a name
      user.image      = auth.info.image # assuming the user model has an image
      # user.json       = {
      #   :gender => auth.info.gender
      # }
    end
  end
end
