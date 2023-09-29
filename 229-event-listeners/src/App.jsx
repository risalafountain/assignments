import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick() {
    console.log("The button was clicked")
  }
  function handleOnMouseOver() {
    console.log("mouse over")
  }
  return (
    <div className='container'>
      <img 
        src= "./images/random.jpg" 
        onMouseOver={handleOnMouseOver} />
      {/* don't add the () or the function will run when the page is open */}
      {/* make sure you're not in responsive view or mouse over will not work  */}
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default App
