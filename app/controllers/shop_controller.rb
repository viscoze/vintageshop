class ShopController < ApplicationController

  def index
    @items = Item.all
    render component: 'Shop', props: { items: @items }
  end

end
