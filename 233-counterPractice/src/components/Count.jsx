import React from "react"

//pass in props
export default function Count(props) {
    console.log("Count component rendered")
 return (
     <div className="counter--count">
         <h1>{props.number}</h1>
     </div>
 )   
}

