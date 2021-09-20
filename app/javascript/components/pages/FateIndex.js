import React, { Component } from "react";
import { NavItem, Nav, Col, Card, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import CardComponent from "../components/CardComponent";

class FateIndex extends Component {
   render() {
    return (
      <>
        <div>
          <h2>This is Fate Index Page Test1</h2>
          {this.props.events &&
            this.props.events.map((event, i) => (
              <CardComponent event={event} key={i} />
            ))}
          <Button title="Add an interest" handleClick={this.handleClick} />
        </div>
      </>
    );
  }
}
export default FateIndex;
