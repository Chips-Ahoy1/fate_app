import React,{Component} from 'react'
import Brian from '../../../assets/images/Brian.jpg'
import Trey from '../../../assets/images/Trey.jpg'
import Chris from '../../../assets/images/Chris.jpg'
import Galadoe from '../../../assets/images/Galadoe.jpg'
import CardComponent from '../components/CardComponent'

const teamchips = [{
    id: 'Brian Pompa',
    image_url: Brian,
    description: 'Brian Pompa | Product Manager'
},
{
    id: 'Galadoe Kulee',
    image_url: Galadoe,
    description: 'Galadoe Kulee | Project Manager '
},{
    id: 'Trey Rogers',
    image_url: Trey,
    description: 'Trey Rogers | Tech Lead'
},{
    id: 'Chris Mackey',
    image_url: Chris,
    description: 'Chris Mackey | Design Lead'
},]
class AboutUs extends Component{
    render() {
        console.log("loading")
        return(
            <>
            <h1>About the Developers</h1>
            <div className='max-w-full'>
            {teamchips.map(person => {
                return (<CardComponent event={person}/>)
            })}
            </div>
            </>

        )
    }
}
export default AboutUs
