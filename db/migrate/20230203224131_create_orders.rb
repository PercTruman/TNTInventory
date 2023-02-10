class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :quantity
      t.string :jde_number
      t.boolean :is_fulfilled
      t.integer :user_id

      t.timestamps
    end
  end
end
