import { useState } from 'react'
import './App.css'
import DiceBox from './components/DiceBox'

function App() {
  const [count, setCount] = useState({
    test:"here"
  })
  // console.log("App component rendered")
  
  return (
    <main className='main--container'>
      <h1 className='main--title'>React Dice</h1>
      {/* <h2>this is an h2 in App component</h2> */}
      <DiceBox />
      {/* <div className="container">
            <h2> this is the dicebox component in APP </h2>
            <DiceBox />
        </div> */}
        <h1>app.jsx works</h1>
    </main>
  )
}

export default App
