import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react' //was getting the REACT not defined error 
import './App.css'

function App() {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

  function addItem() {
    setThingsArray((prevThingsArray)=> [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]) 
    //need to return a new version of state that starts as an array
    //make sure to return a new array and a new version of array. 
    //use spread operator to access the old arr (everything that used to be there)
    //add new things to the prevThingsArray with template literals 
    
  }
  
  const thingsElements = thingsArray.map(thing => <p key={thing}> {thing} </p>)
  
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  )
}

export default App

/* 
--you can't do thingsArray.push() because we would directly modifying our state (it modifies the original array)
--with a setter array we can put one of two things in it (provide it with either a <new value> || <callback function>)
--since we want to add something to an existing array that means we depend on what the previous state is in order to determine the new array 

REMEMBER 
### a new value will not add to the existing array it will be replacing the existing array
### a callback function 


//this is the way we had it work before
    // const newThingText = `Thing ${things.length + 1}`
    // setThings(prevState => [...prevState, newThingText])

*/

