# == Schema Information
#
# Table name: people
#
#  id           :integer          not null, primary key
#  username     :string(255)
#  access_token :string(255)
#

FactoryGirl.define do
  factory :person do
    username "MyString"
    access_token "MyString"
  end
end
