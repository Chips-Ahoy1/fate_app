import React, { Component, useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
const [form, setForm] = useState("")
const [url, setUrl] = useState("")
const [categories, setCategories] = useState("")
const [is_public, setIsPublic] = useState(false)
const[form, SetForm] = useState({
  url: "",
  category: "",
  description: "",
  is_public: false
})
class FormInput extends Component {
  handleChange = (e) => {
    // destructuring form out of state
    // const { form } = this.state;
    setform({form[me.target.name]: e.target.value})
    // setting state to the updated form
    setForm(form);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewEvent(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <FormGroup>
        <br />
        <Label id={this.name}>{this.label}</Label>
        <Input
          type="text"
          name={this.name}
          onChange={this.handleChange}
          value={this.value}
        />
      </FormGroup>
    );
  }
}

export default FormInput