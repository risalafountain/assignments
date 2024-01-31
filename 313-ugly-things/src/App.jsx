import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [newThing, setNewThing] = useState ({
    title: "",
    imgUrl: "",
    description: "",
  })

//handleSubmit 
//handleEdit
//handleDelete

//store the array of ugly thing objects in the Context store 

//API request 
//https://api.vschool.io/<yourname>/thing[/<thingId>]



  return (
    <div className='form'>
      <h1>this is an h1</h1>

<input
type="text"
placeholder="Title"
className='form--title'
name="title"
value={newThing.title}
onChange={handlechange}
/>

      <input
      type="text"
      placeholder="Image URL"
      className='form--url'
      name="imgUrl"
      value={newThing.imgUrl}
      onChange={handlechange}
      />

      <input
      type="text"
      placeholder="Why do you think this is ugly?"
      className='form--descriiption'
      name="description"
      value={newThing.description}
      onChange={handlechange}
      />

    <button onClick={handleSubmit}>Submit</button>
    <button onClick={handleEdit}>Edit</button>
    <button onClick={handleDelete}>Delete</button>
    </div>
    
  )
}

export default App
