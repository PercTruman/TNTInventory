class CreateCases < ActiveRecord::Migration[6.1]
  def change
    create_table :cases do |t|
      t.string :jde_number
      t.integer :pod_id
      t.integer :order_id
      t.integer :quantity_id_pod

      t.timestamps
    end
  end
end
