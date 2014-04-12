class AddJsonToUser < ActiveRecord::Migration
  def change
    add_column :users, :json, :text
  end
end
