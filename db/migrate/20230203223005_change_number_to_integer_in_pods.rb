class ChangeNumberToIntegerInPods < ActiveRecord::Migration[6.1]
  def change
    remove_column :pods, :number
    add_column :pods, :number, :integer
  end
end
