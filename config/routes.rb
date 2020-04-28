Rails.application.routes.draw do
 resources :posts

#  get '/home', to: 'users#show'
 
 
# ============= Auth ====================
	post '/auth/login', to: 'authentication#login'
	get '/auth/verify', to: 'authentication#verify'
  resources :users do
    resources :posts
  end
  get '/home', to: 'users#index'
  
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end