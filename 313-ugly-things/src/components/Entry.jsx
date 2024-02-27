import React, { useContext } from "react";
import { Context } from "./Context"

export default function Entry(props) {
  const { title, description, imgUrl, id } = props
  const { deleteRequest } = useContext(Context)

    //handleDelete
    
  
//bring in state and get request 
  return (
    //   These are being populated in the DOM
    <div>
      <p> Title: {title} </p>
      <img
        src={imgUrl}
        style={{ width: '150px', height: '150px' }}
      />
      <p>Reason: {description}</p>
      <button className="form--button" onClick={() => handleEdit(id)} > Edit </button>

      <button className="form--button" onClick={() => deleteRequest(id)}>Delete </button>

    </div>
  )
}

