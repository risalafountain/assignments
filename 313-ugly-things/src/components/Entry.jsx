import React from "react";

export default function Entry(){
   function handleEdit
   
    return (
     <p>Title: {entry.title}</p>
    <img src={entry.imgUrl} style={{ width: '150px', height: '150px' }} />
    <p>Reason: {entry.description}</p>
    <p>{entry.id}</p>
    <button className='form--button' onClick={() => handleEdit(entry._id)}>edit</button>
    <button className='form--button' onClick={() => handleDelete(entry._id)} > delete</button
   )
   >
}