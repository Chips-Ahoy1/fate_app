import React from 'react'
import { NavLink } from 'react-router-dom'


const CardComponent = ({ event }) => {
    return (<div className="max-w-screen-md flex items-center justify-center flex-col padding mb-6 mx-auto">
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