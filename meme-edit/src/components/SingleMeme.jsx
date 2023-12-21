import React from "react";

export default function SingleMeme(props) {
    // console.log(props)
    //
    const { id, handleDelete, meme } = props

    function handleEdit() {
        //make top and bottom text editable
        //does there need to be a save option after the edits?
        //return an object that has all of the properties of the prevform but update the property based on the name data pulled from the input making the change
        //access the state for the meme that is clicked 
        //toggle (render edit logic ternary )

    }

    return (
        <div className="meme">
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            <img src={meme.randomImage} className="fish" />
            
            <div className="meme--buttons">
                <button
                    className="edit--button"
                    onClick={handleEdit}
                >
                    EDIT MEME
                </button>
                <button
                    className="delete--button"
                    //do not run onClick  automatically
                    onClick={() => handleDelete(id)}
                >
                    DELETE MEME
                </button>
            </div>
        </div>
    )
}