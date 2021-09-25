Rails.application.routes.draw do
  root 'static#home'
  namespace :api do
    namespace :v1 do
      resources :opportunities, only: [:index]
    end
  end
end
