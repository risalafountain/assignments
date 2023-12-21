import React from "react"

export default function EditForm(props) {
    //create new state for edits, format as object, pull in data from props
    const [editedText, setEditedText] = React.useState({
        topText: props.topText,
        bottomText: props.bottomText
    })

    //handle change         
    //listen for the changes/keystrokes and register them
    //why can I have a handleChange in each component? is it because i am working locally within the component? 
    function handleChange(event) {
        //does there need to be a save option after the edits? Y
        //watch for changes in value update  
        const { name, value } = event.target
        //return an object that has all of the properties of the prev but update the value based on the name data pulled from the input making the change
        setEditedText(prev => ({ ...prev, [name]: value }))

        console.log(event.target.value) //this works!
    }

    //handle submit 
    function handleSubmit(event) {
        //prevent default 
        event.preventDefault();
        //why do we have the id here? 
        props.newEdit(props.id, editedText) //this newEdit is defined in SingleMeme
        console.log("the button was clicked")
    }
     

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type='text'
                name="topText"
                // placeholder="Top Text"
                onChange={handleChange}
                value={editedText.value}
            />
            <input
                type='text'
                name="bottomText"
                // placeholder="Bottom Text" 
                onChange={handleChange}
            />
            <button>UPDATE MEME</button>
        </form>
    )
}

