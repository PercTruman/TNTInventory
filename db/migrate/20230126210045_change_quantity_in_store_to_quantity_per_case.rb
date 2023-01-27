class ChangeQuantityInStoreToQuantityPerCase < ActiveRecord::Migration[6.1]
  def change
    remove_column :fireworks, :quantity_in_store
    add_column :fireworks, :quantity_per_case, :integer
  end
end
