class Addattendeename < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :attendee_name, :string
  end
end
