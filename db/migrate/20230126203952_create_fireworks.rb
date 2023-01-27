class CreateFireworks < ActiveRecord::Migration[6.1]
  def change
    create_table :fireworks do |t|
      t.string :upc_code
      t.integer :case_id
      t.integer :quantity_in_store
      t.string :name

      t.timestamps
    end
  end
end
