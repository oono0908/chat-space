Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  root "messages#index"
  resources :users, only: [:edit, :update, :index]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index]
  end
end
