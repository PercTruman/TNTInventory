class AddFireworkNameToCases < ActiveRecord::Migration[6.1]
  def change
    add_column  :cases, :firework_name, :string
  end
end
