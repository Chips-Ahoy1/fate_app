import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { fetchHelper } from "../../lib/fetchHelper.js";
import FormInput from "../components/Form/FormInput";

class FateUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        category: "",
        image_url: "",
        description: "",
        is_public: false,
      },
      submitted: false,
      urls: [],
    };
  }
  handleChange = (e) => {
    const { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { description, url, category, is_public } = this.state.form;
    if (
      (!description && description === "") ||
      (!url && url === "") ||
      (!category && category === "") ||
      (!is_public && is_public === "")
    ) {
      alert("you need to input something");
    } else {
      this.props.updateEvent(this.state.form, this.props.event.id);
      this.setState({ submitted: true });
    }
  };

  fetchImages = async () => {
    if (!this.state.form.category) {
      alert("Please select a category");
    } else {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=1cb7RG1N3agHLuchuLs2GeqtKtdcyELRMj5HLHf8p48&query=${this.state.form.category}&per_page=3&orientation`
      );
      const responseJson = await response.json();
      this.setState({ urls: fetchHelper(responseJson) });
    }
  };

  render() {
    return (
      <div className="grid justify-items-center">
        <h1 className="text-4xl">This is the FateNew page</h1>
        <Form>
          <FormInput
            name="category"
            handleChange={this.handleChange}
            value={this.state.form.category}
            label="Category"
            placeholder={this.props.form?.category}
          />
          <Button
            name="fetch-images"
            onClick={this.fetchImages}
            className="button-style"
          >
            get images
          </Button>

          <div>
            {this.state.urls &&
              this.state.urls.map((image_url, keyID) => {
                return (
                  <div key={keyID}>
                    <img src={image_url} className="h-50px" />
                    <Input
                      name="image_url"
                      type="radio"
                      value={image_url}
                      onChange={this.handleChange}
                    />
                  </div>
                );
              })}
          </div>

          <FormGroup>
            <br />
            <Label id="Url">Url</Label>
            <FormInput
              name="image_url"
              Label="image_url"
              handleChange={this.handleChange}
              value={this.state.form.image_url}
              placeholder={this.props.form?.image_url}
            />
          </FormGroup>
          <FormGroup>
            <br />
            <Label id="NewTable">Description</Label>
            <Input
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.form.description}
            />
          </FormGroup>
          <div>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="is_public"
                  onChange={this.handleChange}
                  value={true}
                />
                public
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="is_public"
                  onChange={this.handleChange}
                  value={false}
                />
                private
              </Label>
            </FormGroup>
          </div>
          <Button
            name="go-back"
            onClick={this.handleSubmit}
            className="button-style"
          >
            Go Back
          </Button>
          <Button
            name="submit"
            onClick={this.handleSubmit}
            className="button-style"
          >
            submit
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/fateindex" />}
      </div>
    );
  }
}
export default FateUpdate;
