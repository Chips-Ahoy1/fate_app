import React,{Component} from 'react'
// import Brian from '../../assets/images/'
import CardComponent from '../components/CardComponent'

const teamchips = [{
    id: 'Brian Pompa', 
    image_url: 'https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612',
    description: 'brian pompa'
},
{
    id: 'test1', 
    image_url: 'https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612',
    description: 'test1'
},{
    id: 'test2', 
    image_url: 'https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612',
    description: 'test2'
},{
    id: 'test3', 
    image_url: 'https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612',
    description: 'test3'
},]
class AboutUs extends Component{
    render() {
        console.log("loading")
        return(
            <>
            <h1>Name</h1>
            {teamchips.map(person => {
                return (<CardComponent event={person}/>) 
            })}
            </>

        )
    }
}
export default AboutUs