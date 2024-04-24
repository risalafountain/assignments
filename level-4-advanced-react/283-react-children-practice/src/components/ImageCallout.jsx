import React from "react";

export default function ImageCallout(props) {
    return (
        <div className="callout">
            <img src={props.img} width="100%" />
            <figcaption>{props.caption}</figcaption>
        </div>
    )
}

