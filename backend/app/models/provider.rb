class Provider < ApplicationRecord
  has_many :opportunity_sources
  has_many :opportunities, through: :opportunity_sources
end
