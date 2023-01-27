class ChangeCaseIdBackToIntegerOnFireworks < ActiveRecord::Migration[6.1]
  def change
    remove_column :fireworks, :case_id
    add_column :fireworks, :case_id, :integer
  end
end
