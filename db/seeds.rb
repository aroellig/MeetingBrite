# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Event.delete_all
User.delete_all

u0 = User.create({username: "guestas3", password: "password13", email: 'emailA@'})


event1 = Event.create(
    title: 'Pizza Party',
    description: 'A fun pizza party',
    creator_id: u0.id,
    capacity: 10,
    location: "Andrew's house",
    date: "24-11-2021"
)


event2 = Event.create(
    title: 'Birthday Party',
    description: 'My birthday party',
    creator_id: u0.id,
    capacity: 10,
    location: "Greg's house",
    date: "24-11-2021"
)

event3 = Event.create(
    title: 'Yoga Club meeting',
    description: 'Yoga club meeting',
    creator_id: u0.id,
    capacity: 15,
    location: "Yoga studio",
    date: "24-11-2021"
)

event4 = Event.create(
    title: 'Dance Party',
    description: 'A disco dance party',
    creator_id: u0.id,
    capacity: 30,
    location: "Disco Club",
    date: "24-11-2021"
)

event5 = Event.create(
    title: 'French Club Meeting',
    description: 'Weekly French club meeting',
    creator_id: u0.id,
    capacity: 4,
    location: "Baguette Restaurant",
    date: "24-11-21"
)

event6 = Event.create(
    title: 'Book Club',
    description: 'Book club meeting',
    creator_id: u0.id,
    capacity: 7,
    location: "Barnes and Noble",
    date: "24-11-2021"
)
event7 = Event.create(
    title: 'Karate Class',
    description: 'karate class',
    creator_id: u0.id,
    capacity: 16,
    location: "Dojo",
    date: "24-11-2021"
)

event8 = Event.create(
    title: 'Scavenger Hunt',
    description: 'A scavenger hunt',
    creator_id: u0.id,
    capacity: 20,
    location: "at the park",
    date: "24-11-2021"
)

event9 = Event.create(
    title: 'Dance Class',
    description: 'A salsa class',
    creator_id: u0.id,
    capacity: 12,
    location: "Salsa studio",
    date: "24-11-2021"
)

event10 = Event.create(
    title: 'Game Night',
    description: 'A game night',
    creator_id: u0.id,
    capacity: 8,
    location: "Bob's house",
    date: "24-11-2021"
)
