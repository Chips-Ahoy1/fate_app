import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
         <Nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-100 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/fateindex">Event Index</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/fatenew">Add Event</NavLink>
              </NavItem>
              {
                logged_in &&
                <div>
                  <a href={sign_out_route}>Sign Out</a>
                </div>
              }
              {
                !logged_in &&
                <div>
                  <a href={sign_in_route}>Sign In</a>
                </div>
              }
            </div>
          </div>
        </Nav>



      </>
    )
  }
}
export default Header