import React,{Component} from 'react'
import Button from '../components/Button'

class FateShow extends Component{
    constructor(props){
        super(props)
        this.state={
            events: [],
        }
    }
    render() {

        return(
        <>
            
            <div>
            <h1>This is the FateShow page</h1>
            {this.props.events && this.props.events.map((event, i) => {
                return (
                    <div key={i}> <img src={event.image_url} alt={event.category} />
                        <p>
                            {event.description}
                        </p>
                    </div>
                )
            })}
            <Button title="Add an interest" handleClick={this.handleClick} />
        </div>
    </>

        )
    }
}
export default FateShow
