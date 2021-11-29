# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.delete_all

u0 = User.create({username: "guestas3", password: "password13", email: 'emailA@'})


Event1 = Event.create(
    title: 'Pizza Party',
    description: 'A fun pizza party',
    creator_id: 1,
    capacity: 10,
    location: "Andrew's house"
)
