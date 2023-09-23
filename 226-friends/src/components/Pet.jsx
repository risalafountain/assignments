import React from "react";


export default function Pet(props){    
    return (
        <div className="pet--container">
           <img className="pet--pic" src = {props.petPic} />
           <p className="pet--name">Name: {props.petName} </p> 
           <p className="pet--breed"> Breed: {props.petBreed}</p> 
        </div>
    )
}