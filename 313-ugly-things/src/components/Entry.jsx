import React from "react";

export default function Entry(props){
    // const {entry}= props 
    // const [editedThing, setEditedThing] = React.useState ({
    //       title: Entry.title,
    //     imgUrl: Entry.imgUrl,
    //     description: Entry.description,
    //     })
    // function handleEdit() {
        
    // }
    return (
//   These are being populated in the DOM
  <div>
<p> Title: {Entry.title}</p>
<img 
src ={Entry.imgUrl}
style={{width: '150px', height: '150px' }}
/>
<p>Reason: {Entry.description}</p>
<p>{Entry.id}</p>
<button className="form--button" onClick={() => handleEdit(Entry.id)} > Edit </button>
<button className="form--button" onClick={() => handleDelete(Entry.id)}>Delete </button>
        </div>
    )
}
   
