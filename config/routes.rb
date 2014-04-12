Bike::Application.routes.draw do
  
  get   '*path'                    => "home#index"

end
