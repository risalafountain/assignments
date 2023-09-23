import React from "react";
import Pet from "./Pet";

export default function Friend(props) {
  // .map for the pets array
  const amigoPets = props.pets.map(pet => {
    return (
      <Pet 
        key = {pet.name}
        petName = {pet.name}
        petBreed = {pet.breed}
        petPic = {pet.pic}
      />
    )
  })
  return (
    <div className="card--container">
      <img className="friend--img" src = {props.friendPic} />
      <h3 className="friend--info">{props.friendName}, <a className="friend--age">{props.friendAge}</a>  </h3>
      {amigoPets}
      {/* render the pets array.map */}
    </div>
  )
}