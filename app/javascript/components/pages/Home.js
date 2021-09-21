import React, { Component } from "react";
import CustomButton from "../components/Button";
import { NavLink } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <>
        <h1>Fate</h1>
        <h3>Driven by the Future</h3>
        <NavLink to="/aboutus">adfg
          {/* <CustomButton title="About Us"
           handleClick={() => {}}/> */}
        </NavLink>
      </>
    );
  }
}
export default Home;
