import React from "react";

export default function Star(props) {
    //
    const starIcon = props.isFilled ? "../images/star-yellow.png" : "../images/star-empty.png"
    
    return (

         <img 
            src={`${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}
            />
    )
}

//copy data from let starIcon we don't have access to our contact state because we aren't passing it in but we have the replacement isFilled which is a part of props

//remove the toggle favorite for now 

