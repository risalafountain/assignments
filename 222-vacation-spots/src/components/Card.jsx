import React from "react";

export default function Card(props) {
    //console.log(props)
return (
    <div className="card--container">
       <img src = {props.coverImg} className="card--image" />
       <p className="card--place">Location: {props.place} </p>
       <p className="card--time">Best Time to Go: {props.timeToGo}</p>
       <p className="card--price">Cost: ${props.price}</p>
    </div>
)
}

