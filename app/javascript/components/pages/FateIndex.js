import React, { Component } from "react";
import { Col, Card, CardSubtitle } from "reactstrap";
import Button from '../components/Button'

class FateIndex extends Component {
  //this page still needs work
  handleClick = () => {
    console.log('hello world');
  }
  render() {
    return (
      <>
        <div>
          <h2>This is Fate Index Page Test1</h2>
          {this.props.events && this.props.events.map(event => {
            return (
              <p key={event.id}>
                {event.description}
              </p>
            )
          })}
          <Button title="Add an interest" handleClick={this.handleClick} />
        </div>
      </>
    );
  }
}
export default FateIndex;

