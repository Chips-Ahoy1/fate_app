import React, { Component } from "react";
// import Brian from '../../assets/images/'
import CardComponent from "../components/CardComponent";

const teamchips = [
  {
    id: "Brian Pompa",
    image_url:
      "https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612",
    description: "Brian Pompa | Product Manager | Manages the conversation around large changes to the app; Ensures requirements are met",
  },
  {
    id: "Galadoe Kulee",
    image_url:
      "https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612",
    description: "Galadoe Kulee | Project Manager | Ensures developers are assigned to the card they are working on, decides",
  },
  {
    id: "Trey Rogers",
    image_url:
      "https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612",
    description: "Trey Rogers | Tech Lead | Merges code when appropriate; Must have a strong understanding of the technical needs of the project",
  },
  {
    id: "Chris Mackey",
    image_url:
      "https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612",
    description: "Chris Mackey | Design Lead | Navigation and user experience; Color schemes, implementation of branding",
  },
];
class AboutUs extends Component {
  render() {
    console.log("loading");
    return (
      <>
        <h1>About the Developers</h1>
        {teamchips.map((person) => {
          return <CardComponent event={person} />;
        })}
      </>
    );
  }
}
export default AboutUs;
