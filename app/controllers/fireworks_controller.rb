class FireworksController < ApplicationController

    def create
        f = Firework.create!(firework_params)
        render json: f, status: :created
    end

    def index
        fireworks = Firework.all 
        render json: fireworks, status: :ok
    end

    private
    def firework_params
        params.permit(:upc_code, :quantity_per_case, :case_id, :name)
    end
end
