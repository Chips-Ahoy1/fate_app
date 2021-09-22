import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "../components/Button";

class FateShow extends Component {
  handleDelete = () => {
    fetch(`/events/${this.props.event.id}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    })
      .then(() => {
        this.props.fetchIndex()
        // this.props.history.push("/fateindex")
      })
      .catch(err => {console.error(err)})
};
  render() {
    return (
      <>
        <div>
          <h1></h1>
          {this.props.event && (
            <div>
              <p>{this.props.event.category}</p>
              <p>{this.props.event.description}</p>
              <img src={this.props.event.image_url} />
              <CustomButton
                className="bg-red"
                title="Delete"
                handleClick={this.handleDelete}
              />
              <NavLink to={`/fateupdate/${this.props.event.id}`}>
                <CustomButton
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
