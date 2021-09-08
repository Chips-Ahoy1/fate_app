import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import { Nav, NavItem } from "reactstrap" 
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
           {/* <Route exact path="/" component={ Home } /> */}
            {/* <Route path="/about" component={ AboutUs } />
           <Route path="/learn" component={ LearnMore } /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
