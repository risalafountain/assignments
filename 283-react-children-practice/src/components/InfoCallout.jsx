import React from "react";

export default function InfoCallout(props) {
    return (
        <div className="callout">
            <h2>{props.header}</h2>
            <p>{props.body}</p>
        </div>
    )
}