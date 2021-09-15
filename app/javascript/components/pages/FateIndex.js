import React, { Component } from "react";
import { NavItem, Nav, Col, Card, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import Button from '../components/Button'


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
                            <div>
                            <div key={i}> 
                            <img src={event.image_url} alt={event.category} />
                                <p>
                                    {event.description}
                                </p>
                            </div>
                            <div>
                              <Nav>
                                 <NavItem>
                                <NavLink className="names" to={`/fateshow/${event.id}`}>View</NavLink>
                                </NavItem>
                             </Nav>
                             </div>
                             </div>
                        )
                    })}
                    <Button title="Add an interest" handleClick={this.handleClick} />
                </div>
            </>
        );
    }
}
export default FateIndex;

