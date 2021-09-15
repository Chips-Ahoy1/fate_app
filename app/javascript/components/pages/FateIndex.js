import React, { Component } from "react";
import { Col, Card, CardSubtitle } from "reactstrap";

class FateIndex extends Component {
  //this page still needs work
  render() {
    return (
      <>
      <div>
          <h1>This is the FateIndex page</h1>         
            {this.props.events && this.props.events.map(event => {
              return(
                <p key={event.id}>
                  {event.description}
                </p>
          )})}
      </div>
      </>
    );
  }
}
export default FateIndex;
