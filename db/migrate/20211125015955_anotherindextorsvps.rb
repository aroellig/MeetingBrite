class Anotherindextorsvps < ActiveRecord::Migration[5.2]
  def change
    add_index :rsvps, [:event_id, :user_id], unique:true
  end
end
