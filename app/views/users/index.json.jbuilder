json.array!(@users) do |user|
  json.extract! user, :id, :data, :image_large
  json.score current_user.calculate_score( user ) if current_user.present?
  json.url user_url(user, format: :json)
end
