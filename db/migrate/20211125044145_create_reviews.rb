class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :review, null: false 
      t.integer :rating, null: false
      t.integer :event_id, null: false 
      t.integer :user_id, null: false
     
      t.timestamps
    end
    add_index :reviews, :event_id
  end
end
