class Order < ApplicationRecord
    belongs_to :user
    has_many :pod_cases
    has_many  :pods, through: :pod_cases
    has_many :cases, through: :pod_cases
end
