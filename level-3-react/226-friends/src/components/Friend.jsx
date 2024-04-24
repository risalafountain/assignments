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
      <img className="friend--img" src = {props.img} />
      <h3 className="friend--info">{props.name}, <a className="friend--age">{props.age}</a>  </h3>
      {amigoPets}
      {/* render the pets array.map */}
    </div>
  )
}