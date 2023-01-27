class ChangeQuantityIdPodToQuantityInPod < ActiveRecord::Migration[6.1]
  def change
    remove_column :cases, :quantity_id_pod
    add_column :cases, :quantity_in_pod, :integer
  end
end
