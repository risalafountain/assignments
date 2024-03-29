import React from "react";

export default function EmailCallout(props) {
    return (
        <div className="callout">
            <h2>{props.header}</h2>
            <input
                type="email"
                placeholder="Enter Email"
            />
            <button>{props.btnText}</button>
        </div>
    )
}