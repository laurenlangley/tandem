# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all

valid_availabilities = ["", "Morning", "Afternoon", "Evening"]

25.times do |i|
  User.create({
    :email      => Faker::Internet.safe_email,
    :name       => Faker::Name.name,
    :image      => Faker::Avatar.image,
    :json       => {
      :age          => ( rand(25) + 18 ),
      :first_name   => Faker::Name.first_name,
      :city         => Faker::Address.city + " " + Faker::Address.state,
      :gender       => ( rand(2) == 0 ? "male" : "female" ),
      :location     => {
        :offroad          => rand(2) == 0,
        :paved_trail      => rand(2) == 0,
        :road             => rand(2) == 0
      },
      :scene        => {
        :weekend_warrior  => rand(2) == 0,
        :commuter         => rand(2) == 0,
        :mountain         => rand(2) == 0,
        :fixies           => rand(2) == 0,
        :social           => rand(2) == 0,
        :roadie           => rand(2) == 0
      },
      :skill        => {
        :beginner         => false,
        :intermediate     => true,
        :advanced         => false
      },
      :looking_for  => {
        :training         => rand(2) == 0,
        :fun              => rand(2) == 0,
        :commuting        => rand(2) == 0,
        :destination      => rand(2) == 0
      },
      :availability => {
        :sunday     => valid_availabilities[ rand(4) ],
        :monday     => valid_availabilities[ rand(4) ],
        :tuesday    => valid_availabilities[ rand(4) ],
        :wednesday  => valid_availabilities[ rand(4) ],
        :thursday   => valid_availabilities[ rand(4) ],
        :friday     => valid_availabilities[ rand(4) ],
        :saturday   => valid_availabilities[ rand(4) ]
      },
      :summary => Faker::Lorem.paragraph
    }.to_json
  })
end
