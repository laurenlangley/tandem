json.extract! @user, :id, :created_at, :updated_at, :data, :image_large
json.score current_user.calculate_score( @user ) if current_user.present?
