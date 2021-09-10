import React,{Component} from 'react'

class FateIndex extends Component{
  //this page still needs work 
    render() {

        return(
            <>
            <div>
        <h2>This is Fate Index Page</h2>
        <br />
        <Col sm="6">
          {this.props.events && this.props.events.map(events => {
            return(
              <Card body className="text-center" key={ apartment.id }>
                <img src=event.image_url/>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    { `${event.description} `}
                  </CardSubtitle>
            </Card>
            )
          })}
        </Col>
      </div>
            </>

        )
    }
}
export default FateIndex
