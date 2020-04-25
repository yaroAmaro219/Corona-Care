class User < ApplicationRecord
  has_secure_password

  # validates :email, presence: true, unqiueness: true
  # validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
  # validates :password, length: {minimum: 6}

  def frontend_data
    {
      id:id,
      first_name: first_name,
      age: age,
      email: email,
      location: location,
      type_of_volunteer: type_of_volunteer,
      best_time: best_time,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end
