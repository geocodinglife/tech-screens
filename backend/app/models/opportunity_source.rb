class OpportunitySource < ApplicationRecord
  belongs_to :provider
  belongs_to :opportunity
end
