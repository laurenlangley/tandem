json.array!(@users) do |user|
  json.extract! user, :id, :data, :email, :name, :image_large
  json.url user_url(user, format: :json)
end
