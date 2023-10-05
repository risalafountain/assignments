import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const isGoingOut = true
  

  return (
    <div className="state">
    <h1 className="state--title">Do I feel like going out tonight?</h1>
    <div className="state--value">
        <h1>{isGoingOut === true ? "Yes" : "No"}</h1>
    </div>
</div>
  )
}

export default App

/**236.25--ternary practice
 Challenge: Replace the if/else below with a ternary
 to determine the text that should display on the page
 ORIGINAL CHALLENGE 
function App() {
  const isGoingOut = true
    
  let answer  // Use ternary here
  if(isGoingOut === true) {
      answer = "Yes"
  } else {
      answer = "No"
  }


 ternary allows us to put an if/else statement in a single line
      let answer = isGoingOut === true ? "Yes" : "No"
this reads 
 if isGoingOut===true (?) then use this expression "Yes" (:)<--otherwise/else let answer equal to"No"

 if you change the const to false, the answer on the screen will show "No"

 BUT YOU CAN SIMPLIFY THIS FURTHER! 

 let answser =isGoingOut ? "Yes" : "No"
 which reads the exact same way "if isGoingOut is a truthy value then set the answer to yes otherwise set it to no" ! 
 Since isGoingOut is already a boolean,  we don't have to equate it to true as above
 
 ANOTHER EXAMPLE/CHALLENGE
    
Challenge: move our ternary directly inside of the JSX
so the "Yes" and "No" are determined inside the <h1>      
*Hint: you will no longer need the `answer` variable
     <h1>{isGoingOut ? "Yes" : "No"}</h1>
     remove the variable and bring the text down into the h1 so each time the component renders, it will check the value of isGoingOut

NOW WE ARE READY TO CHANGE THE VALUE WITH STATE!
*/
/** 236.75 FLIPPING STATE BACK AND FORTH 
 * Challenge: 
 * - Make it so clicking the div.state--value flips that
 *   boolean value (true -> false, false -> true)
 * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
 */
