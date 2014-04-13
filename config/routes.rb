Tandem::Application.routes.draw do
  root 'home#index'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  
  get "users/current", :to => "users#current"
  resources :users

  # GET /users/current.json   => currently logged in user
  # GET /users/:id.json       => get user information by id
  # GET /users.json           => get list of *all* users
  # PUT /users/:id.json       => update user

  devise_scope :user do
    get 'sign_in', :to => 'devise/sessions#new', :as => :new_user_session
    get 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  end
  
  get  '*path'                    => "home#index"

end
