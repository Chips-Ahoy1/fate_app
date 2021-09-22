import React, { Component } from "react";
import CustomButton from "../components/Button";
import { NavLink } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="flex items-center justify-center flex-col">
        <br />
        <br />
        <h1 className="text-9xl font-marack">Fate</h1>
        <br />
        <h3 className="font-allerta">Driven by the Future</h3>
        <br />
        <NavLink to="/aboutus">
          <CustomButton title="About Us" handleClick={() => {}} />
        </NavLink>
      </div>
    );
  }
}
export default Home;
