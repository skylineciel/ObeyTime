class Api::RestaurantsController < ApplicationController    
    def index
        restaurants = Restaurant.all

        if params[:price]
            restaurants = Restaurant.where('price_range = ?', params[:price])
        end
  
      
        @restaurants = restaurants
        render :index 
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id]) 
        render :show 
    end

    private 

    def restaurant_params
        params.require(:restaurant).permit(
            :name,
            :address,
            :phone_number,
            :hours,
            :payment_option,
            :price_range,
            :cuisine,
            :neighborhood,
            :parking_details,
            :dining_style,
            :description
        )
    end
end