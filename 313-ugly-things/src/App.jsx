import React, { useState, useContext } from 'react'
import './App.css'
import axios from 'axios'
import EditThingForm from './components/EditThingForm'
import Entry from './components/Entry'
import { Context } from './components/Context'
function App() {
  const { allEntries, setAllEntries} = useContext(Context)

  const [newThing, setNewThing] = useState({
    title: "",
    imgUrl: '',
    description: "",
  })

  const [toggle, setToggle] = useState(false)

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
  //ADD REQUEST (POST)
  function addThing() {
    setNewThing(newThing)

    //POST request  
    // axios.post("https://api.vschool.io/risalaf/thing", newThing)
    //   .then(response => setNewThing(newThing))
    //   .catch(error => console.log(error))
    // // console.log(newThing)
  }

  //editing fields
  //access single id in allEntries arr 
  //if there's any changes in the id, then upload the changes to the id 
  //upload the edited item into to allEntries arr 
  // it would be something like that. you can see in the route we're telling the database which one we're updating by using the id as the endpoint. and than after that the inputs would what your updating it with.
  // the inputs would end up being the state of your edit form when you call the function

  //EDIT REQUEST  (PUT)
  function changeThing(id, inputs) {

    console.log("this is the id: " + id)
  }


  //DELETE--moved to context so I don't have to filter by id 
  //filter in here allThings.filter _id
  // function removeThing(id) {
  //   axios.delete(`https://api.vschool.io/risalaf/thing/${id}`)
  //     .then(response => console.log(response.data))
  //     // .then(response => )
  //     .then(response => setAllEntries(allEntries.filter((newThing) => newThing._id !== id)))
  //     .catch(error => console.log(error))
  //   console.log("the delete button was clicked")
  // }

  //handleSubmit
  function handleSubmit(event) {
    //prevent default 
    event.preventDefault();
    console.log("the submit button was clicked")
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
        {/* ? = when allEntries is defined we will map through it  */}
        {allEntries && allEntries?.map((entry, index) => (
          <div className='entry' key ={index} >
            <>
              <Entry
                title={entry.title}
                imgUrl={entry.imgUrl}
                description={entry.description}
                id={entry._id}
              />
            </>
          </div>
        ))}
      </div>
    </div>

  )
}

export default App
