import React,{Component} from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'


class FateNew extends Component{
  constructor(props){
    super(props)

    this.state = {
      form: {
        category: "",
        url: "",
        description: "",
        is_public: "",
      },
      submitted: false
    }
  }

  handleChange = (e) => {
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createNewEvent(this.state.form)
        this.setState({submitted: true})
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
                    <Input type="radio" name="radio1" onChange={this.handleChange} value={this.state.form.is_public}/>{' '}true
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" onChange={this.handleChange} value={this.state.form.is_public}/>{' '}
                  </Label>false
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
