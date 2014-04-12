class HomeController < ApplicationController

  def index
    if user_signed_in?
      render :app
    else
      render :index
    end
  end

  def iphone
    if user_signed_in?
      render :iphone, :layout => "iphone"
    else
      render :iphone_facebook, :layout => "iphone"
    end
  end

end