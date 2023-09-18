import React from "react";

export default function Card(props) {
    console.log(props)
return (
    <div className="card--container">
       <p>Location: {props.place} </p>
       <p>Best Time to Go: {props.timeToGo}</p>
       <p>Cost: {props.price}</p>
    </div>
)
}

