import React,{Component} from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import {Redirect} from "react-router-dom"



class FateNew extends Component{
  constructor(props){
    super(props)

    this.state = {
      form: {
        category: "",
        url: "",
        description: "",
        is_public: false,
      },
      submitted: false
    }
  }

  handleChange = (e) => {
        // destructuring form out of state
        const { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
        console.log(this.state.form.category);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createNewEvent(this.state.form)
        this.setState({submitted: true})
    }

    fetchImages = async () => {
      const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=1cb7RG1N3agHLuchuLs2GeqtKtdcyELRMj5HLHf8p48&query=${this.state.form.category}&per_page=3&orientation`)

      const test = await response.json()
      console.log(test);
    }

    render() {

        return(
            <>
              <h1>This is the FateNew page</h1>
              <Form>
                <FormGroup>
                <br/>
                    <Label id = "Category">Category</Label>
                    <Input type="text"name="category" onChange={this.handleChange} value={this.state.form.category}/>
                </FormGroup>
                  <Button name="fetch-images" onClick={this.fetchImages} className="button-style">
                    get images
                  </Button>
                <FormGroup>
                <br/>
                    <Label id = "Url">Url</Label>
                        <Input type="text"name="url" onChange={this.handleChange} value={this.state.form.url}/>
                </FormGroup>
                <FormGroup>
                <br/>
                    <Label id = "NewTable">Description</Label>
                        <Input type="text"name="description" onChange={this.handleChange} value={this.state.form.description}/>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="is_public"
                    onChange={this.handleChange} value={true}/>public
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="is_public"
                     onChange={this.handleChange} value={false}/>private
                  </Label>
                </FormGroup>
                <Button name="go-back" onClick={this.handleSubmit} className="button-style">
                Go Back
              </Button>
              <Button name="submit" onClick={this.handleSubmit} className="button-style">
            submit
              </Button>
              </Form>

              {this.state.submitted && <Redirect to="/fateindex" />}
            </>

        )
    }
}
export default FateNew
