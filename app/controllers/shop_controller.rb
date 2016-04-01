class ShopController < ApplicationController

  def index
    @items = Item.all
    render component: 'Shop', props: { items: @items }
  end

  def create
  end

  private

  def item_position_params
  end
end
