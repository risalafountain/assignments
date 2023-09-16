import React from "react";
//import swimImg from "./images/swim.png"
//import star from "./images/star.png"

export default function Card(props) {
   //console.log(props.openSpots) 
   console.log(props)
   let badgeText  
   if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
   } else if (props.location === "Online") {
        badgeText = "ONLINE"
   }

   // pass objects as props

   return (
        <div className="card">
            {badgeText && <div className="card--badge"> {badgeText}</div>}
            <img src = {`./${props.coverImg}`} className="card--image"/>
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" />
                
                <span>{props.rating}</span>
                
                <span className="gray"> ({props.stats.reviewCount}) • </span>
                
                <span className="gray"> ({props.location})  </span>
            </div>
            
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span>/person</p>
        </div>
    )
}