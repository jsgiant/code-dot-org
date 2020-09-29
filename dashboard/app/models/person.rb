# == Schema Information
#
# Table name: people
#
#  id           :integer          not null, primary key
#  username     :string(255)
#  access_token :string(255)
#

class Person < ApplicationRecord
    def update_details(access_token)
        self.update_attribute(:access_token, access_token)
    end
end
