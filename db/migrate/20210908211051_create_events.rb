class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.text :image_url
      t.string :category
      t.boolean :is_public
      t.text :description
      t.integer :user_id

      t.timestamps
    end
  end
end
