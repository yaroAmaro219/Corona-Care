Rails.application.routes.draw do
 resources :posts
 resources :users
 
 
 
# ============= Auth ====================
	post '/auth/login', to: 'authentication#login'
	get '/auth/verify', to: 'authentication#verify'
  resources :users do
    resources :posts
  end
  get '/home', to: 'users#index'
  get '/home', to: 'users#show'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end