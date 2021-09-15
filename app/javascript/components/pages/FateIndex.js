import React, { Component } from "react";
import { NavItem, Nav, Col, Card, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import Button from '../components/Button'

const CardComponent = ({ event }) => {
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
class FateIndex extends Component {
    handleClick = () => {
        console.log('hello world');
    }
    render() {
        return (
            <>
                <div>
                    <h2>This is Fate Index Page Test1</h2>
                    {this.props.events && this.props.events.map((event, i) => {
                        return (
                            <CardComponent event={event} i={i} />
                        )
                    })}
                    <Button title="Add an interest" handleClick={this.handleClick} />
                </div>
            </>
        );
    }
}
export default FateIndex;

