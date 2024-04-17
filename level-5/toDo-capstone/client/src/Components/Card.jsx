import React, { useContext, useState } from "react";
import { Context } from "../Context/ContextProvider";
import EditTaskForm from "./EditTaskForm";

export default function Card(props) {
    const { deleteTask } = useContext(Context)
    const { imageUrl, title, _id } = props
    const [isEditing, setIsEditing] = useState(false)

    function handleDelete() {
        // console.log('the delete button was pressed')
        deleteTask(_id)
    }
//toggle isEditing state
    function handleToggle() {
        setIsEditing(prev => !prev)
    }

    return (
        <>
        {/* if isEditing is false return card details  : return EditTaskForm*/}
            {!isEditing ?
                (<div className="card">
                    <p> Title: {title} </p>
                    <img src={imageUrl}
                        style={{ width: '150px', height: '150px' }}
                    />
                    <button onClick={handleToggle} > Edit </button>
                    <button onClick={handleDelete}>Delete </button>
                    <button>Add  To Favorites</button>
                </div>) :
                (<EditTaskForm
                        card={{ title, imageUrl, _id }}
                        handleToggle={handleToggle}
                    />)}

        </>
    )
}