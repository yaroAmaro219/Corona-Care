class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.boolean :age
      t.string :email
      t.string :location
      t.string :type_of_volunteer
      t.string :best_time

      t.timestamps
    end
  end
end
