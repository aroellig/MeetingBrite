class Remove < ActiveRecord::Migration[5.2]
  def change
    remove_index :rsvps, [:event_id, :user_id]
    add_index :rsvps, [:event_id, :user_id]
  end
end
