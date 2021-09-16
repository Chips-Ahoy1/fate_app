import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import Header from "./components/Header";
import FateNew from "./pages/FateNew";
import FateIndex from "./pages/FateIndex";
import FateShow from './pages/FateShow';
import Home from "./pages/Home";


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
    const { description, url, category, is_public } = event;
    if (
      (!description && description === "") ||
      (!url && url === "") ||
      (!category && category === "") ||
      (!is_public && is_public === "")
    ) {
      alert("you need to input something");
    } else {
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

    }
  };
  render() {
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/fateindex"
            render={(props) => <FateIndex events={this.state.events} />}
          />
          <Route
            path="/fatenew"
            render={(props) => <FateNew createNewEvent={this.createNewEvent} />}
          />
          <Route path="/fateshow/:id" render={(props) => { 
            let id = props.match.params.id
            let event = this.state.events.find(event => event.id === +id)
            {console.log(this.state.events);}
            return <FateShow event={event}/>
          }} />
        </Switch>
      </Router>
    );
  }
}

export default App;

