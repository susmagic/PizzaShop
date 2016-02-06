class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
	    t.string :title
	    t.text :orders_input
	    t.text :name
	    t.text :phone
	    t.text :adress

	    t.timestamps
    end

  end
end
