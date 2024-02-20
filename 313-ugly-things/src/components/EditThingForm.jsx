import React from "react";

export default function EditThingForm(props) {
  console.log('editThingForm')
  const {entry}= props 
  const [editedThing, setEditedThing] = React.useState ({
        title: entry.title,
      imgUrl: entry.imgUrl,
      description: entry.description,
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

    function handleSubmit(){
      //put request 
      // axios.put(`https://api.vschool.io/risalaf/thing/${id}`, inputs)
    //   .then(response => console.log(inputs))
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
<button onClick = {handleEdit}>Upate Values</button>
        </form>
    )
}
