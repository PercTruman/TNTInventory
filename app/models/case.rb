class Case < ApplicationRecord
    has_many :fireworks
    belongs_to :pod
    belongs_to :order
end
