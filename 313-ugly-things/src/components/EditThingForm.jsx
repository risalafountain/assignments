import React from "react";

export default function EditThingForm(props) {
    const [editedThing, setEditedThing] = React.useState ({
        title: props.Title,
      imgUrl: props.imgUrl,
      description: props.description,
      })

      function handleChange(event) {
        const {name, value} = event.target

        setEditedThing(prevEditedThing => {
            return {
                ...prevEditedThing, 
                [name]: value
            }
        })
        console.log(event.target.value) 
    }
    function handleEdit(event) {
        event.preventDefault()
        console.log("the update button was clicked")
    }

    return (
        <form className="form" onSubmit = {handleSubmit}>

<input
        type="text"
        placeholder="What is it?"
        className='form--input'
        name="title"
        value={editedThing.title}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Paste Image URL here"
        className='form--input'
        name="imgUrl"
        value={editedThing.imgUrl.url}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Why is it ugly?"
        className='form--input'
        name="description"
        value={editedThing.description}
        onChange={handleChange}
      />
<button>Upate Values</button>
        </form>
    )
}
