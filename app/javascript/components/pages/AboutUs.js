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
    description: 'Galadoe Kulee | Project Manager; I am a Full Stack Developer Student at LEARN Academy. In our team (Chips Ahoy), I ensured developers are assigned to the card they are working on, decides when a card is done'
},{
    id: 'Trey Rogers',
    image_url: Trey,
    description: 'Trey Rogers | Tech Lead, I am a prior Marine, and full stack software developer at Learn Academy, I ensure myself and my group and organized in Github aswell as working with my group to understand and push through any hurdles we may experience.'
},{
    id: 'Chris Mackey',
    image_url: Chris,
    description: 'Chris Mackey | I am the Design Lead for Fate and a Full Stack Developer at Learn Academy. My goal is to create a seamless user experience and visually appealing interface. I implemented Tailwind CSS and Reactstrap to style many of the features you see here.'
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
