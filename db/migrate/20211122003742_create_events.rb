class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :creator_id, null: false
      t.integer :capacity, null: false
      t.string :location, null: false
      t.datetime :date, null: false
      t.string :picture_url

      t.timestamps
    end
  end
end
