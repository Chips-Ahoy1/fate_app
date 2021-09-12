import React, { Component } from "react";
import { Col, Card, CardSubtitle } from "reactstrap";

class FateIndex extends Component {
  //this page still needs work
  render() {
    return (
      <>
        <div>
          <h2>This is Fate Index Page</h2>
          <br />
          <Col sm="6">
            {this.props.event?.map((event, i) => {
              //Optional chaining ? asking if something exists,do.
              return (
                <Card body className="text-center" key={i}>
                  <img src={event.image_url} />
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {event.description}
                  </CardSubtitle>
                </Card>
              );
            })}
          </Col>
        </div>
      </>
    );
  }
}
export default FateIndex;
