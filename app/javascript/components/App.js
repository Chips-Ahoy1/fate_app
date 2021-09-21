import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import Header from "./components/Header";
import FateNew from "./pages/FateNew";
import FateIndex from "./pages/FateIndex";
import FateShow from "./pages/FateShow";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FateUpdate from "./pages/FateUpdate";
import NotFound from "./pages/NotFound"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.fetchIndex();
  }

  fetchIndex = () => {
    fetch("/events")
      .then((response) => response.json())
      .then((eventsArray) => this.setState({ events: eventsArray }))
      .catch((errors) => console.log("Event read errors: ", errors));
  };

  createNewEvent = (event) => {
    fetch("/events", {
      body: JSON.stringify(event),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((response) => {
        if (response.status > 400) {
          return response.status;
        } else {
          return response.json();
        }
      })
      .then((event) => {
        this.fetchIndex();
      })
      // window.location = "/apartmentindex"
      .catch((err) => {
        console.log("createnewerror: ", err);
      });
  };
  updateEvent = (event, id) => {
    fetch(`/events/${id}`, {
      body: JSON.stringify(event),
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
    })
      .then((response) => {
        if (response.status > 400) {
          return response.status;
        } else {
          return response.json();
        }
      })
      .then((event) => {
        this.fetchIndex();
      });
  };
  render() {
    const { logged_in: loggedIn } = this.props;
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/notfound" component={NotFound} />
          {loggedIn ? (
            <>
              <Route
                path="/fateindex"
                render={(props) => <FateIndex events={this.state.events} />}
              />
              <Route
                path="/fatenew"
                render={(props) => (
                  <FateNew createNewEvent={this.createNewEvent} />
                )}
              />
              <Route
                path="/fateshow/:id"
                render={(props) => {
                  let id = props.match.params.id;
                  let event = this.state.events.find(
                    (event) => event.id === +id
                  );
                  return (
                    <FateShow
                      event={event}
                      history={props.history}
                      fetchIndex={this.fetchIndex}
                    />
                  )
                }}  
              />
              <Route
                path="/fateupdate/:id"
                render={(props) => {
                  let id = props.match.params.id;
                  let event = this.state.events.find(
                    (event) => event.id === +id
                  );
                  return (
                    <FateUpdate event={event} updateEvent={this.updateEvent} />
                  ); // add update event
                }} 
              />
            </>
          ): <Redirect push to="/notfound"/>}          
        </Switch>
      </Router>
    );
  }
}

export default App;
