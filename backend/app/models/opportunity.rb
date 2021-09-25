class Opportunity < ApplicationRecord
  has_many :opportunity_sources
  has_many :providers, through: :opportunity_sources

  def self.get_all(provider_id)
    return all if provider_id.nil?
    joins(:opportunity_sources).where(opportunity_sources: { provider_id: provider_id}).distinct
  end
end
# joins(:opportunity_sources).where(opportunity_sources: { provider_id: provider_id}).distinct