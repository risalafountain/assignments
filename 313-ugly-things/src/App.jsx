import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [newThing, setNewThing] = useState({
    title: "",
    imgUrl: { url: "" },
    description: ""
  })
  const [allEntries, setAllEntries] = useState([])
  
  // const [newEntry, setNewEntry] = useState({ 
    //   title: "",
    //   imgUrl:{url: "} ,
    //   description: "" 
    // })
    // console.log(newThing.imgUrl)

 //POST request   
    React.useEffect(() => {
      fetch("https://api.vschool.io/risalf/thing")
          // .then(res => res.json())
          .then(data =>console.log(data))
          // .then(data => setNewThing(newThing))
  }, [])

    
  function handleChange(event) {
    const { name, value } = event.target
    // console.log(event.target)
    if (name === 'imgUrl') {
      setNewThing((prev) => ({
        ...prev,
        imgUrl: { url: value }
      }))
    } else {
      setNewThing((prev) => ({
        ...prev,
        [name]: value
      }))
    }
    // console.log(event.target)
  }
  //handleSubmit
  function handleSubmit(event) {
    //prevent default 
    event.preventDefault();
    // console.log("the button was clicked")
    //update new entry to its own array 
    setAllEntries((prev) => [...prev, { ...newThing }])
    //reset to default 
    setNewThing({
      title: "",
      imgUrl: { url: "" },
      description: ""
    })
  }
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
        placeholder="What is it?"
        className='form--input'
        name="title"
        value={newThing.title}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Paste Image URL here"
        className='form--input'
        name="imgUrl"
        value={newThing.imgUrl.url}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Why is it ugly?"
        className='form--input'
        name="description"
        value={newThing.description}
        onChange={handleChange}
      />

      <button className="form--button" onClick={handleSubmit}>Submit</button>
      {/* <button onClick={handleEdit}>Edit</button> */}
      {/* <button onClick={handleDelete}>Delete</button> */}
      
      <h2>Thread:</h2>
      
      <div className="all--things">
        {/* map over array and for each entry, create a new div  */}
        {allEntries.map((entry, id) => (
          <div className='entry' key={id}>
            <p>Title: {entry.title}</p>
            <img src = {entry.imgUrl.url}/>
            <p>Reason: {entry.description}</p>
          </div>
        ))}

      </div>
    </div>

  )
}

export default App
