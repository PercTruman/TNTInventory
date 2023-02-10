class PodCase < ApplicationRecord
    belongs_to :pod
    belongs_to :order
    belongs_to :case

end
