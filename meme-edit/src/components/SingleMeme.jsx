import React from "react";
import EditForm from "./EditForm";

export default function SingleMeme(props) {
    // console.log(props)
    const { id, handleDelete, meme } = props
    const [showForm, setShowForm] = React.useState(false)

    return (
        <div className="meme">
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            <img src={meme.randomImage} className="fish" />

            <div className="meme--buttons">
                <button
                    className="edit--button"
                    //allows for the toggle function; will toggle the opposite state of what it was before 
                    onClick={() => setShowForm(show => !showForm)}
                > 
                    {/*how do i hide this button once it is clicked/toggled to false */}
                    {showForm ? "HIDE EDIT" : "EDIT MEME"}
                </button>
                <button
                    className="delete--button"
                    //do not run onClick  automatically
                    onClick={() => handleDelete(id)}
                >
                    DELETE MEME
                </button>

            </div>
            {showForm && <EditForm
                // newEdit={(editedText)}
            />}
        </div>
    )
}