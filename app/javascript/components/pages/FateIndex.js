import React, { Component } from "react";
import { Col, Card, CardSubtitle } from "reactstrap";

class FateIndex extends Component {
  //this page still needs work
  render() {
    return (
      <>
      <div>
          <h2>This is Fate Index Page Test1</h2>         
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

