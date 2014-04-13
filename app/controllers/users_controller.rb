class UsersController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    
    if current_user.present?
      @users = User.where("id != ?", current_user.id).all.sort{|a, b| current_user.calculate_score(b) <=> current_user.calculate_score(a) }
    else
      @users = User.all
    end
  end

  def current
    @user = current_user
    if @user.nil?
      head :not_found and return
    else
      render :show
    end
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update

    json      = params[:user][:data].to_json if params[:user][:data].present?

    respond_to do |format|
      if json.present? && @user.update( :json => json )
        format.json { head :no_content }
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:data)
    end
end
