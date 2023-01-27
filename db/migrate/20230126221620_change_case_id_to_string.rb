class ChangeCaseIdToString < ActiveRecord::Migration[6.1]
  def change
    change_column :fireworks, :case_id, :string
  end
end
