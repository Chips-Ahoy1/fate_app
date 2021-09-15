import React, { Component } from 'react'
import Button from '../components/Button'

class FateShow extends Component {

    render() {
        return (
            <>
                <div>
                    <h1>Show Page</h1>
                    {this.props.event && (
                        <div>
                            <p>{this.props.event.category}</p>
                            <p>{this.props.event.description}</p>
                            <img src={this.props.event.image_url} />
                        </div>
                    )}
                </div>
            </>

        )
    }
}
export default FateShow
{/* {this.props.event && this.props.event.map((event, i) => {
                        return (
                            <div key={i}>
                                <img src={event.image_url} alt={event.category} />
                                <p>
                                    {event.description}
                                </p>
                            </div>
                        )
                    })} */}