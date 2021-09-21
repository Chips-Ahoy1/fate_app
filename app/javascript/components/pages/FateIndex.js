import React, { Component } from "react";
import { NavItem, Nav, Col, Card, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import CustomButton from "../components/Button";
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
          <CustomButton title="Add an interest" handleClick={this.handleClick} />
        </div>
      </>
    );
  }
}
export default FateIndex;
