import React, { Component } from "react";
// import Brian from '../../assets/images/'
import CardComponent from "../components/CardComponent";

const teamchips = [
  {
    id: "Brian Pompa",
    image_url:
      "https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612",
    description: "Brian Pompa | Product Manager",
  },
  {
    id: "Galadoe Kulee",
    image_url:
      "https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612",
    description: "Galadoe Kulee | Project Manager ",
  },
  {
    id: "Trey Rogers",
    image_url:
      "https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612",
    description: "Trey Rogers | Tech Lead",
  },
  {
    id: "Chris Mackey",
    image_url:
      "https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612",
    description: "Chris Mackey | Design Lead",
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
