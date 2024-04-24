import './App.css'
import React from 'react'
import axios from 'axios'

function App() {
//create state for randomColor to store the data in 
  const [randomColor, setRandomColor] = React.useState('')
  // const [count, setCount] = React.useState(0)
  // console.log("component rendered")

  function boxColor(){
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    //set the randomColor to whatever data is collected--go into two drop downs
    .then(data => setRandomColor(data.data.new_color))
    .catch(error => console.log(error))
  
  }
//i can use either useEffect or the button 
  // React.useEffect(() => {
  //   axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()} this is the get request`)
  //   //set the randomColor to whatever data is collected
  //   .then(data => setRandomColor(data.data.new_color))
  //   .catch(error => console.log(error))
  // }, [])

  return (
    <>
     <div>
      <h1 className='header' style={{backgroundColor: `#${randomColor}`}}></h1> 
      <p className='color--title'>Color: {randomColor}</p>
{/* event handler for the button which will randomize a color  */}
{/* use an anonymous function to prevent the function call on load*/}
      <button onClick={() => boxColor()}>Click for More Colors</button>
     </div>
    </>
  )
}

export default App

//Plan
  //clg to ensure onclick works    
//update state when data is received
//useEffect with two parameters
//create get request 
  //console log to make sure it works first
//to run each time the 
