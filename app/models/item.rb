class Item < ActiveRecord::Base
  has_attached_file :image, styles: { medium: "250x200>", thumb: "100x100>" }
  validates_attachment_content_type :image,
    content_type: ["image/jpg", "image/jpeg", "image/png"]
end
