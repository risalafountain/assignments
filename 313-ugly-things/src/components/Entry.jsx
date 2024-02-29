import React, { useState, useContext } from "react";
import { Context } from "./Context"
import EditThingForm from "./EditThingForm";

export default function Entry(props) {
  const { title, description, imgUrl, id } = props
  const { deleteRequest, putRequest } = useContext(Context)
  const [showForm, setShowForm] = useState(false)
  const [isEditing, setIsEditing] = React.useState(false)

  function handleToggle(){
    setIsEditing(prev => !prev)
  }

  //bring in state and get request 
  return (
    <>
    {/* //   These are being populated in the DOM */}
      {!isEditing?
      (<div>
        <p> Title: {title} </p>
        <img
          src={imgUrl}
          style={{ width: '150px', height: '150px' }}
          />
        <p>Reason: {description}</p>
        <p>ID: {id}</p>
        <button className="form--button" onClick={handleToggle} > Edit </button>
        <button className="form--button" onClick={() => deleteRequest(id)}>Delete </button>
      </div>):(
        <EditThingForm 
        entry = {{title, description, imgUrl, id}}
        handleToggle = {handleToggle}
        />)}
    </>
  )
}

