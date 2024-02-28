import React from "react";

export default function EditThingForm(props) {
  // console.log('editThingForm')
  const { entry } = props
  const [editedThing, setEditedThing] = React.useState({
    title: entry.title,
    imgUrl: entry.imgUrl,
    description: entry.description,
  })
  // const [isEditing, setIsEditing] = React.useState(true)

  function toggleIsEditing() {
    setIsEditing(prev => { !prev })
  }

  function handleChange(event) {
    const { name, value } = event.target

    setEditedThing(prevEditedThing => {
      return {
        ...prevEditedThing,
        [name]: value
      }
    })
    console.log(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    props.newEdit(props.id, editedThing)
    console.log("the submit button was clicked in teh EditThingForm component ")
    //put request 
    // axios.put(`https://api.vschool.io/risalaf/thing/${id}`, inputs)
    //   .then(response => console.log(inputs))
  }

  return (

      <form className="form" onSubmit={handleSubmit}>

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
          value={editedThing.imgUrl}
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
        <button onClick={toggleIsEditing}>Update Values</button>

      </form>
  )
}
