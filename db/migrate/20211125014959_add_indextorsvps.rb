class AddIndextorsvps < ActiveRecord::Migration[5.2]
  def change
    add_index :rsvps, :user_id
    add_index :rsvps, :event_id
  end
end
