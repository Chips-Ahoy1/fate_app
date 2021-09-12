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
import FateNew from "./pages/FateNew"
import FateIndex from "./pages/FateIndex"
import Home from "./pages/Home"


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    this.eventIndex()
  }

  eventIndex = () => {
    fetch("/events")
      .then((response) => response.json())
      .then(eventsArray => this.setState({ events: eventsArray }))
      .catch(errors => console.log("Event read errors: ", errors))
  }//put into fate index

  createNewEvent = (newEvent) => {
      console.log(this.props.logged_in)
      console.log(newEvent)
      fetch("/fate", {
      body: JSON.stringify(newEvent),
      headers: {'Content-Type': 'application/json'},
      method: "POST"
    })
    .then(response => {
      console.log("response check")
      if (response.status === 422){
        alert("Please try again")
      }
      return response.json

      // window.location = "/apartmentindex"
    })
    .then(payload => {
      console.log("payload")
      return this.fateIndex()
    })
    .catch(err => {
      console.log("createnewerror: ", err)
    })
  }

  render() {
            console.log(this.state.events)
    return (
      
        <Router>
            <Header {...this.props}/>
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/fateindex" render={ (props) => <FateIndex events={ this.state.events }/> } />
                <Route path="/fatenew" render={ (props) => <FateNew createEvent={this.createEvent} /> } />
              </Switch>
      </Router>
    );
  }
}

export default App;
