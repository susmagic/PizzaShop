class AddProducts < ActiveRecord::Migration
  def change
    Product.create :title => 'Hawaiian', :description => 'Pizza from Hawaiian',:price => 350,:size => 30, :is_spicy =>false, :is_veg =>false, :is_best_offer => false, :path_to_image => '/images/1.jpeg'

    Product.create :title => 'Pepperoni', :description => 'Pizza Pepperoni nice', :price => 400, :size => 30, :is_spicy =>false,:is_veg =>false, :is_best_offer => true, :path_to_image => '/images/2.jpeg'

    Product.create :title => 'Vegetable', :description => 'amazing vegetable pizza', :price => 300, :size => 30, :is_spicy =>false, :is_veg =>true, :is_best_offer => true, :path_to_image => '/images/3.jpeg'

  end
end
