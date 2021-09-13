import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
class Header extends Component {
  render() {
    const {
      logged_in: loggedIn,
      sign_in_route: signInRoute,
      sign_out_route: signOutRoute
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
              <NavItem>
                <NavLink to="/fateshow">My Profile</NavLink>
              </NavItem>
              {
                loggedIn &&
                <div>
                  <a href={signOutRoute}>Sign Out</a>
                </div>
              }
              {
                !loggedIn &&
                <div>
                  <a href={signInRoute}>Sign In</a>
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