class ItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_item, only: [:edit, :destroy, :update]

  def index
    @items = Item.all
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.create(item_params)
    redirect_to items_path
  end

  def destroy
    @item.destroy
    redirect_to items_path
  end

  def edit
  end

  def update
    @item.update(item_params)
    redirect_to items_path
  end

  private

  def item_params
    params.require(:item).permit(:title, :description, :price, :image_url)
  end

  def find_item
    @item = Item.find(params[:id])
  end
end
