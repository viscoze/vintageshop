Rails.application.routes.draw do
  devise_for :users
  root "shop#index"

  resources :items
  # match "items/create", to: "item#create", via: :post
  # match "items", to: "item#item_processor", via: :get
end
