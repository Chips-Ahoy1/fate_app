import React, { Component } from "react";
import { NavItem, Nav, Col, Card, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import CustomButton from "../components/Button";
import CardComponent from "../components/CardComponent";

class FateIndex extends Component {
  render() {
    return (
      <>
        <div className="max-w-screen-md flex items-center justify-center flex-col padding mb-6 mx-auto">
          <h2>Events</h2>
          {this.props.events &&
            this.props.events.map((event, i) => (
              <CardComponent event={event} key={i} />
            ))}
            <NavLink to="/fatenew">
          <CustomButton
            title="Add an interest"
            handleClick={() => {}}
          />
          </NavLink>
        </div>
      </>
    );
  }
}
export default FateIndex;
