class Api::V1::OpportunitiesController < ApplicationController
  def index
    opportunities = Opportunity.get_all(params[:provider_id])
    render json: opportunities, status: :ok
  end
end