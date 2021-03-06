class Item < ActiveRecord::Base
  has_many :line_items

  validates :title, :description, :price, :image_url, presence: true
  validates :price, numericality: {greater_than_or_equal_to: 0.01}
  validates :image_url, allow_blank: true,
                        format: {with: %r{\.(gif|jpg|png)\Z}i,
                                  message: 'GIF, JPEG, PNG'}


end
