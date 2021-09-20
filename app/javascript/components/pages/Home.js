import React, { Component } from "react";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <>
        <h1>Fate</h1>
        <h3>Driven by the Future</h3>
        <NavLink to="/aboutus">
          <Button title="About Us" />
        </NavLink>
      </>
    );
  }
}
export default Home;
