import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import boxes from './components/boxes'
import Box from './components/Box'
import './App.css'

function App(props) {
  const [squares, setSquares] = React.useState(boxes)
  const styles = {
    backgroundColor: props.darkMode ? "#222222": "#cccccc"
  }

  const squareElements = squares.map(square => (
    <Box className='box' key={square.id} on={square.on}/>
    // <div style={styles} ></div>
  ))

  return (
   <main>
      {squareElements}
   </main>
  )
}

export default App
