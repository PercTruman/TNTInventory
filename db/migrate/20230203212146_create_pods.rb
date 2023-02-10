class CreatePods < ActiveRecord::Migration[6.1]
  def change
    create_table :pods do |t|
      t.string :number

      t.timestamps
    end
  end
end
