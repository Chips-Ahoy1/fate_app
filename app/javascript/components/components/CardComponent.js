import React from 'react'
import {NavLink} from 'react-router-dom'


const CardComponent = ({ event}) => {
    return (<div className="w-full flex justify-center items-end padding mb-6">
        <div> 
        <NavLink className="names" to={`/fateshow/${event.id}`}>
            <img src={event.image_url} alt={event.category} />
        </NavLink>
        <div className="bg-purple-300 w-full h-20 flex items-center justify-center">
            <p>
                {event.description}

            </p>
        </div>
        </div>
    </div>)
}
export default CardComponent