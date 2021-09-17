import React, { Component } from 'react'
import Button from '../components/Button'

class FateShow extends Component {

    render() {
        return (
            <>
                <div className='flex items-center justify-center flex-col'>
                    
                    <h1 className='text-5xl'></h1>
                    <br/>
                    <br/>
                    {this.props.event && (
                        <div className='flex items-center justify-center flex-col'>
                            <h2 className='text-3xl'>{this.props.event.category}</h2>
                            <br/>
                            <img src={this.props.event.image_url} />
                            <p>{this.props.event.description}</p>
                        </div>
                    )}
                </div>
            </>

        )
    }
}
export default FateShow