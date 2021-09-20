import React, { Component } from "react";
import { NavItem, Nav, Col, Card, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import CardComponent from "../components/CardComponent";

class FateIndex extends Component {
    handleClick = () => {
        console.log('hello world');
    }
    render() {
        return (
            
                <div className='flex items-center justify-center flex-col'>
                    <br/>
                    <br/>
                    
                    <h2 className='font-allerta text-6xl'>Welcome to Fate</h2>
                    <br/>
                    <br/>
                    <div className='flex items-center justify-center flex-col'>

                    {this.props.events && this.props.events.map((event, i) => <CardComponent event={event} key={i} />)}
                    <Button title="Add an interest" handleClick={this.handleClick} />
                    </div>
                </div>
            
        );
    }
}
export default FateIndex;
