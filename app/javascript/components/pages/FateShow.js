import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

class FateShow extends Component {
  handleDelete = () => {
    fetch(`/events/${this.props.event.id}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    })
      .then((response) => {
        if (response.status > 400) {
          return response.status;
        } else {
          return console.error(`response.status: ${response.status}`);
        }
      })
      .then(() => {
        this.props.fetchIndex();
      });
  };
  render() {
    return (
      <>
        <div>
          <h1>Show Page</h1>
          {this.props.event && (
            <div>
              <p>{this.props.event.category}</p>
              <p>{this.props.event.description}</p>
              <img src={this.props.event.image_url} />
              <Button
                className="bg-red"
                title="Delete"
                handleClick={this.handleDelete}
              />
              <NavLink to={`/fateupdate/${this.props.event.id}`}>
                <Button
                  title="Update"
                  handleClick={() => {}} // Empty function using created component to preserve styling
                />
              </NavLink>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default FateShow;
