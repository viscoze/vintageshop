Rails.application.routes.draw do
  resources :line_items
  resources :carts
  devise_for :users
  root "shop#index"

  resources :items
  # match "items/create", to: "item#create", via: :post
  # match "items", to: "item#item_processor", via: :get
end
