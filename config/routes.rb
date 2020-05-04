Rails.application.routes.draw do
 resources :posts
 resources :users

 resources :users do
  resources :posts
end

get 'users/:id/user_posts' => 'users#user_posts', :as => :custom_user_posts


 
# ============= Auth ====================
	post '/auth/login', to: 'authentication#login'
	get '/auth/verify', to: 'authentication#verify'
  
  get '/home', to: 'users#index'
  get '/home', to: 'users#show'
  get '/home/:id', to: 'users#show'
  get '/profile/:id', to: 'posts#show'
  get '/posts/:id', to: 'posts#destroy'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end