Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :emails, only: [:index, :create, :new]
    end
  end

  get '/', to: 'homes#index'
end
