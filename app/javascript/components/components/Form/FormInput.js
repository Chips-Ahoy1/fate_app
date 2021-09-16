import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";


class FormInput extends Component {
  render() {
    return (
      <FormGroup>
        <br />
        <Label id={this.props.name}>{this.props.label}</Label>
        <Input
          type="text"
          name={this.props.name}
          onChange={this.props.handleChange}
          value={this.props.value}
        />
      </FormGroup>
    );
  }
}

export default FormInput