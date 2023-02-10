class CreatePodCases < ActiveRecord::Migration[6.1]
  def change
    create_table :pod_cases do |t|
      t.integer :pod_id
      t.integer :case_id
      t.integer :order_id

      t.timestamps
    end
  end
end
