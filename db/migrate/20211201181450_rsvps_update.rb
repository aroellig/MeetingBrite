class RsvpsUpdate < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :num_attendees, :integer
  end
end
