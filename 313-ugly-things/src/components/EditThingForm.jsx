import React, { useContext } from "react";
import { Context } from "./Context";

export default function EditThingForm(props) {
  // console.log('editThingForm')
  const { entry, handleToggle } = props
  const {putRequest} = useContext(Context)

  const [editedThing, setEditedThing] = React.useState({
    title: entry.title,
    imgUrl: entry.imgUrl,
    description: entry.description,
  })


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
    putRequest(entry.id, editedThing)
    handleToggle()
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
        <button onClick={handleSubmit}>Update Values</button>
        <button onClick={handleToggle}>Cancel</button>

      </form>
  )
}
