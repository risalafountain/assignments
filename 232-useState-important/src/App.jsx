import { useState } from 'react'
import React from 'react' // is this necessary for useState to work? 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [isImportant, setIsImportant] = React.useState("Yes")
  //console.log(isImportant) //Yes
  
  function handleClick() {
    setIsImportant("No");
  }  

  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
       <div className="state--value" onClick={handleClick}>
          <h1>{isImportant}</h1> 
      </div>
    </div>
  )
}

export default App

//##useState 232.5
/**
    * Challenge: Replace our hard-coded "Yes" on the page with 
    * some state initiated with React.useState()
    */

// if  const result = React.useState() and if you were to console.log(result) the console would show and array where the first parameter is undefined and the second parameter is a function liek this: [undefined, f()<---this is how it is shown in scrimba]
//whatever you put in the ()  when you are calling useState will be saved as the default value for the state variable that we want to save. 
//so this const result = React.useState("hello") console.log(result) would then look like this ["hello", f()]

//##array destructuring 232.75

//<h1>{result[0]}</h1> *we put the index of zero because we want to access the first thing in the array but this is too clunky!
//since console.log(result) will give us an array, we can destructure the array upon receiving it as a variable like this const [result, func] then when we run {result[0]} we wil recive the first item 
//choose a name that makes sense of the value we are trying to keep track of in this case (isImportant and the answer is YES)

//##change state 232.25

//use set (instead of func): the convention is to use SET and the rest of the variable that we call the state
//change the state whenever something specific happens on the page
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */
//copy the line of code and set up event listener in the return
//the function allows us to change a state if we want to (it provides a new version of state) as such: setIsImportant=("No")
//since we put the event listener into the div, we are saying that when a click happens anywhere within that div (in this case, the white circle) then the new version of state will be run which will be No
//however how do we change it back or make it to where it is able to switch back and forth?  [see 233-counter practice for more info ]