import React from "react"
import moment from 'moment'


export default function Note(props){

    const {title, description, createdAt} = props
    const timeStamp = moment(createdAt).fromNow()

    return (
        <div className ='note'>
            <h1>Title: {title} </h1>
            <h2>Description: {description}</h2>
            <p>{timeStamp}</p>
        </div>
    )
}