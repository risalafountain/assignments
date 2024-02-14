import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [newThing, setNewThing] = useState({
    title: "",
    imgUrl: '',
    description: "",
  })

  const [allEntries, setAllEntries] = useState([])

  //in the get request we will be setting all entries 
  //the delete will then have access to the _id
  //pass entry._id  to the handleDelete function in the onClick then it will be defined 

  // GET request 
  React.useEffect(() => {
    fetch("https://api.vschool.io/risalaf/thing")
      .then(res => res.json())
      //set all the entries with the data received from request 
      .then(data => setAllEntries(data))
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
    // console.log(newThing)
  }

  function changeThing() {
    //PUT request
    axios.put("https://api.vschool.io/risalaf/thing", newThing)
      .then(response => setNewThing(newThing))
      .then (response => setAllEntries(allEntries.filter ((newThing) => newThing._id !== id)))
      .catch(error => console.log(error))
    console.log(newThing)
  }

  //filter in here allThings.filter _id
  function removeThing(id) {
    axios.delete(`https://api.vschool.io/risalaf/thing/${id}`)
    .then(response => console.log(response.data))
    // .then(response => )
    .then (response => setAllEntries(allEntries.filter ((newThing) => newThing._id !== id)))
    .catch(error => console.log(error))
  console.log("the delete button was clicked")
  }

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
  //need to map over existing arr to change edits 
  // changeThing()

  //handleDelete
function handleDelete(id){
 //make arr reflect the change 
  removeThing(id)
  console.log("this is the handleDelete function", id)
}
 
  //store the array of ugly thing objects in the Context store 

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

      <h2>Thread:</h2>

      <div className="all--things">
        {/* map over array and for each entry, create a new div  */}
        {allEntries.map((entry, index) => (
          <div className='entry' key={index}>
            <p>Title: {entry.title}</p>
            <img src={entry.imgUrl} style={{ width: '150px', height: '150px' }} />
            <p>Reason: {entry.description}</p>
            <p>{entry.id}</p>
            <button className='form--button'>edit</button>
            <button className='form--button' onClick={()=>handleDelete(entry._id)} > delete</button>
          </div>
        ))}

      </div>
    </div>

  )
}

export default App
