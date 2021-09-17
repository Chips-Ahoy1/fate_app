import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { fetchHelper } from "../../lib/fetchHelper.js";
import FormInput from "../components/Form/FormInput";

class FateNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        category: "",
        url: "",
        description: "",
        is_public: false,
      },
      submitted: false,
      urls: [],
    };
  }

  handleChange = (e) => {
    // destructuring form out of state
    const { form } = this.state;
    form[e.target.name] = e.target.value;
    // setting state to the updated form
    this.setState({ form: form });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewEvent(this.state.form);
    this.setState({ submitted: true });
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
      <>
        <div className="grid justify-items-center">
          <h1 className="text-4xl">This is the FateNew page</h1>
          <Form>
            <FormInput
              name="category"
              handleChange={this.handleChange}
              value={this.state.form.category}
              label="Category"
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
                this.state.urls.map((url, keyID) => {
                  return (
                    <div key={keyID}>
                      <img src={url} className="h-50px" />
                      <Input
                        name="url"
                        type="radio"
                        value={url}
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
                name="Image_url"
                Label="url"
                handleChange={this.handleChange}
                value={this.state.form.url}
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
      </>
    );
  }
}
export default FateNew;
