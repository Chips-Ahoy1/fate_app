import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
import Header from "./components/Header"
class App extends React.Component {
  render() {

    return (
      <Router>
        <Header {...this.props} />
        <Switch>        
        </Switch>
      </Router>
    );
  }
}

export default App;
