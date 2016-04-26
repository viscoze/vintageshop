class LineItemsController < ApplicationController
  include CurrentCart
  before_action :set_cart, only: :create
  before_action :set_line_item, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @line_items = LineItem.all
    respond_with(@line_items)
  end

  def show
    respond_with(@line_item)
  end

  def new
    @line_item = LineItem.new
    respond_with(@line_item)
  end

  def edit
  end

  def create
    item = Item.find(params[:item])
    @line_item = add_product(item.id)
    @line_item.save
    respond_with(@line_item)
  end

  def update
    @line_item.update(line_item_params)
    respond_with(@line_item)
  end

  def destroy
    @line_item.destroy
    respond_with(@line_item)
  end

  private
    def set_line_item
      @line_item = LineItem.find(params[:id])
    end

    def line_item_params
      params.require(:line_item).permit(:product_id, :cart_id)
    end
end
