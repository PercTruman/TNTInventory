class RemoveQuantityInPodFromCases < ActiveRecord::Migration[6.1]
  def change
    remove_column :cases, :quantity_in_pod
  end
end
