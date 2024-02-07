import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [newThing, setNewThing] = useState({
    title: "",
    imgUrl: '',
    description: ""
  })

  const [allEntries, setAllEntries] = useState([])

  // GET request 
  React.useEffect(() => {
    fetch("https://api.vschool.io/risalf/thing")
      .then(res => res.json())
    // .then(data => console.log(data))
  }, [])


  function handleChange(event) {
    const { name, value } = event.target
    // console.log(event.target)
    if (name === 'imgUrl') {
      setNewThing((prev) => ({
        ...prev,
        imgUrl: value
      }))
    } else {
      setNewThing((prev) => ({
        ...prev,
        [name]: value
      }))
    }
    // console.log(event.target)
  }

  function addThing() {
    setNewThing(newThing)

    //POST request  
    axios.post("https://api.vschool.io/risalaf/thing", newThing)
      .then(response => setNewThing(newThing))
      .catch(error => console.log(error))
    console.log(newThing)
  }

  // function changeThing() {
    // axios.put("https://api.vschool.io/risalaf/thing", newThing)
    //   .then(response => setNewThing(newThing))
    //   .catch(error => console.log(error))
    // console.log(newThing)
  // }

  // function removeThing() {
  //   axios.post("https://api.vschool.io/risalaf/thing", newThing)
  //   .then(response => setNewThing(newThing))
  //   .catch(error => console.log(error))
  // console.log(newThing)

  // }

  //handleSubmit
  function handleSubmit(event) {
    //prevent default 
    event.preventDefault();
    // console.log("the button was clicked")
    //update new entry to its own array 
    setAllEntries((prev) => [...prev, { ...newThing }])
    addThing()
    //reset to default 
    setNewThing({
      title: "",
      imgUrl: "",
      description: ""
    })
  }



  //handleEdit
  // event.preventDefault()///is this necessary??
  //make arr reflect the change 
  // setAllEntries((prev) => [...prev, {...newThing}]) //is this necessary??
  // changeThing()

  //handleDelete
  // event.preventDefault() ///is this necessary??
  //make arr reflect the change 
  // setAllEntries((prev) => [...prev, {...newThing}])
  // removeThing()


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
            <img src={entry.imgUrl} style={{ width: '150px', height: '150px' }} />
            <p>Reason: {entry.description}</p>
          </div>
        ))}

      </div>
    </div>

  )
}

export default App
