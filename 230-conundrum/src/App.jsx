import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react' //was getting the REACT not defined error 
import './App.css'

function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

  function addItem() {
    const newThingText = `Thing ${things.length + 1}`
    setThings(prevState => [...prevState, newThingText])
  }
  
  const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  )
}

export default App


// **********************we can only get so far this way! we need to use state
// function App() {
//   const thingsArray = ["Thing 1", "Thing 2"]
//       /**
//      * Challenge: Map over the thingsArray to generate
//      * a <p> element for each item and render them on the page
//      * below the button
//      */
//   // THIS CREATES AN ARR OF PARAGRAPH ELEMENTS
//      // create a new variable (thingsElements)
//      // look at each thing in the array (a string) return a jsx version of that string
//     // then call the variable in the return 
//     //make sure to add a key property to avoid the error
//   const thingsElements = thingsArray.map(thing => <p key ={thing}>{thing}</p>)
//     /**
//      * Challenge: Add an event listener to the button so when
//      * it is clicked, it adds another thing to our array
//      * 
//      * Hint: use the array length + 1 to determine the number
//      * of the "Thing" being added. Also, have you event listener
//      * console.log(thingsArray) after adding the new item to the
//      * array
//      * 
//      * Spoiler: the page won't update when new things get added
//      * to the array!
//      */
//   //create a function addItem 
//   //console log to check that it is adding the current items in thingsArray
//   //create variable for the new text
//   //push the new text into the thingsArray

//   function addItem() {
//     //console.log(thingsArray) //["Thing 1", "Thing 2"]
//     const newThingText = `Thing ${thingsArray.length + 1}`
//     thingsArray.push(newThingText)
//     console.log(thingsArray) //['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4'] it works!
//   }

//   //CONUNDRUM
//   //though our array is changing what we see on the screen is not
//   //if we update our data then react will update the UI (because it is declarative)
//   //we need to use react state to hook into the component so that whenever changes are made in state react will update the UI

//   return (
//     <div>
//       <button onClick={addItem}>Add Item</button>
//       {thingsElements}
//     </div>
