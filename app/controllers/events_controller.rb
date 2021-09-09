class EventsController < ApplicationController
    def index
        events = Event.all 
        render json:events
    end

    def create
        if current_user
            event = current_user.events.create(event_params)
            render json:event
        else 
            head 401 
        end
    end
    
    def show
        event = Event.find(params[:id])
        render json:event
    end

    def update
        event = Event.find(params[:id])
        if current_user.id == event.user_id
            event.update(event_params) 
        else 
            head 401
        end
        render json:event
    end
    def destroy
        event = Event.find(params[:id])
        event.destroy
        render json:event
    end
    private
    def event_params
        params.require(:event).permit(:image_url, :category, :is_public, :description)
    end
end
