class HomeController < ApplicationController

  def index
    if user_signed_in?
      render :app
    else
      render :index
    end
  end

end