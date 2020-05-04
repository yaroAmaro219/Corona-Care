class PostsController < ApplicationController
  # before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    user = User.find(params[:id])
    post = Post.find_by_id(params[:user_id])

    render json: user, include: :posts
  end

  # POST /posts
  def create
    user = User.find(params[:user_id])
    post = Post.new(post_params)
    # post.user = user
    # post.user = @current_user
    if post.save!
      render json: user, include: :posts
    else
      render json: post.errors
  end
end

  # PATCH/PUT /posts/1
  def update
    post = Post.find(params[:id])
    post.update(post_params)
    render json: post
  end

  # DELETE /posts/1
  def destroy
    post = Post.find(params[:id])
    post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:name, :title, :content, :user_id)
    end
end
