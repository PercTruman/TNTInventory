class ChangeQuantityPerCaseToString < ActiveRecord::Migration[6.1]
  def change
    change_column :fireworks, :quantity_per_case, :string
  end
end
