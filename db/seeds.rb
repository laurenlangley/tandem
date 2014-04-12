# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all

valid_availabilities = ["", "12am-4am", "4am-8am", "8am-12pm", "12pm-4pm", "4pm-8pm", "8pm-12am"]

25.times do |i|
  User.create({
    :email  => Faker::Internet.safe_email,
    :name   => Faker::Name.name,
    :image  => Faker::Avatar.image,
    :json   => {
      :age    => ( rand(25) + 18 ),
      :gender => ( rand(2) == 0 ? "male" : "female" ),
      :location => {
        :road_warrior     => rand(2) == 0,
        :trails_only      => rand(2) == 0,
        :silver_comet     => rand(2) == 0,
        :city             => rand(2) == 0,
        :stone_mountain   => rand(2) == 0,
        :beltline         => rand(2) == 0
      },
      :scene => {
        :weekend_warrior  => rand(2) == 0,
        :commuter         => rand(2) == 0,
        :mountain         => rand(2) == 0,
        :fixed            => rand(2) == 0
      },
      :skill  => {
        :beginner         => false,
        :intermediate     => true,
        :advanced         => false
      },
      :speed  => {
        :casual           => rand(2) == 0,
        :commuter         => rand(2) == 0,
        :exercise         => rand(2) == 0,
        :race             => rand(2) == 0
      },
      :looking_for => {
        :training         => rand(2) == 0,
        :fun              => rand(2) == 0,
        :commuting        => rand(2) == 0,
        :destination      => rand(2) == 0
      },
      :availability => {
        :sunday     => valid_availabilities[ rand(7) ],
        :monday     => valid_availabilities[ rand(7) ],
        :tuesday    => valid_availabilities[ rand(7) ],
        :wednesday  => valid_availabilities[ rand(7) ],
        :thursday   => valid_availabilities[ rand(7) ],
        :friday     => valid_availabilities[ rand(7) ],
        :saturday   => valid_availabilities[ rand(7) ]
      }
    }.to_json
  })
end