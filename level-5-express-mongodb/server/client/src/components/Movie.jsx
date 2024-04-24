import React from "react";

export default function Movie(props) {
    const {title, genre, _id} = props
    // console.log(props) //test
    return (
        <div className="movie">
            <h1>Title: {title}</h1>
            <p>Genre: {genre}</p>
        </div>
    )
}

