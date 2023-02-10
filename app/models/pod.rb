class Pod < ApplicationRecord
    has_many :pod_cases
    has_many :cases, through: :pod_cases
    has_many :orders, through: :pod_cases
end
