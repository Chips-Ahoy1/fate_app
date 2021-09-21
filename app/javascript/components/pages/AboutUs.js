import React,{Component} from 'react'
import Brian from '../../../assets/images/Brian.jpg'
import Trey from '../../../assets/images/Trey.jpg'
import Chris from '../../../assets/images/Chris.jpg'
import Galadoe from '../../../assets/images/Galadoe.jpg'
import CardComponent from '../components/CardComponent'

const teamchips = [{
    id: 'Brian Pompa',
    image_url: Brian,
    description: 'Hi my name is Brian Pompa i am the product manager in our team chips Ahoy. I am a full stack developer in LEARN Academy. my job is to communicate with my team and the instrcutors about the project and give updated details.'
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
