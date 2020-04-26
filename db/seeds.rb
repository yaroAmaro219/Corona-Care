# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(first_name: "Luke", age: 77, email: "hello@hello.com", password:'Luke12345', location: 'Brooklyn', type_of_volunteer:'Good', best_time:'7PM')
user2 = User.create!(first_name: "Juke", age: 77, email: "ello@hello.com", password:'Juke12345', location: 'Brooklyn', type_of_volunteer:'Good', best_time:'7PM')

post1 = Post.create!(name: "Luke", title: "Groceries", content: "I like food", user_id:2)

puts "#{User.count} users were created"
puts "#{Post.count} posts were created"
