import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react"
import Count from './components/Count'

export default function App() {
  const [count, setCount] = React.useState(0)

  function add() {
    // console.log("Add")
    setCount(prevCount => prevCount+ 1) //this reads: given the old value return old value plus one
  }
  function subtract() {
    setCount(prevCount => prevCount - 1) //given the old value, return old value minus one
}

console.log("App component rendered")
  

return (
    <div className="counter">
            <button className="counter--minus"onClick={subtract}>–</button>
            <Count number={count} />
            <button className="counter--plus" onClick ={add}>+</button>
        </div>
    )
  }
  
/**233.75-counter practice 
  * Challenge: Set up state to track our count (initial value is 0)
1: use React.useState with an initial value of zero (0) and catch what it returns in some variable. 
2: in the first value we will receive count which will replace the zero, and in the second value name the setter function setCount
3: replace the hard coded zero with the count value turning this <h1>0</h1> into this <h1> {count} </h1>


 * Challenge: Create a function called `add` that runs (declare func inside our component)
 * when the + button is clicked. (Can just console.log("add") for now)

1:set up function w/ the name add 
2:add event listener onClick to the add button
2:double check the console log is working //Add

SYNTAX: 
function add() {
    console.log("Add")
  }
 
 * Challenge: 
 * See if you can think of a way to add 1 to the count
 * every time the + button is clicked

since we have access to the current count we can add a +1
we don't use count ++ or ++count
this is forbidden because it modifies state
we would never want to run an equal sign to modify state

  * Challenge: 
  * Add functionality to the minus button
1:create subtract function 
2: make it subtract one
3: add onClick handler

DONE:) 
export default function App() {
  const [count, setCount] = React.useState(0)

  function add() {
    // console.log("Add")
    setCount(count + 1)
  }
  function subtract() {
    setCount(count - 1)
}



  return (
    <div className="counter">
            <button className="counter--minus"onClick={subtract}>–</button>
            <div className="counter--count">
                <h1> {count} </h1>
            </div>
            <button className="counter--plus" onClick ={add}>+</button>
        </div>
    )
  }


This is the completed code however; best practices means improving how we use state value. 


**234.25 Changing state with a callback function

     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.

    ES5
        function add() {
        setCount(function(oldValue) {
            return oldValue + 1
        })
    }

    ES6
        function add() {
        setCount(prevCount => prevCount + 1) {
            return oldValue + 1
        })
    }

    // Challenge: update `substract` to use a callback function

*/


/*
240.75 passing state as prop   
  
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
    
    take the three lines of code and place them in their own component
    pass in {props.numbers} since we named (what is it called?? property??) number in App.jsx
    import Count.jsx into App.jsx
    call the count component in app.jsx  

      return (
    <div className="counter">
            <button className="counter--minus"onClick={subtract}>–</button>
            <Count number={count} />
            <button className="counter--plus" onClick ={add}>+</button>
        </div>
    )
  }

  next console log ("App component rendered" and "Count component rendered")
  this shows how REACT re renders the parent component and children component each time we change our state


*/
