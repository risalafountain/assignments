import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import boxes from './components/boxes'
import Box from './components/Box'
import './App.css'

function App(props) {
  const [squares, setSquares] = React.useState(boxes)
//   const styles ={
//     backgroundColor: squares ? "#222222" : "transparent"
// }
  function toggle(id) {
    // console.log("clicked!")
    //console.log(id)
    setSquares(prevSquares => {
      const newSquares =[]
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if(currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare, 
            on: !currentSquare.on
          }
          newSquares.push(updatedSquare)
        } else{
            newSquares.push(currentSquare)
          }
        }  
        return newSquares
    })
  }
  
//this is the copied code from scrimba, my code above wasn't working....why? 
//   function toggle(id) {
//     setSquares(prevSquares => {
//         const newSquares = []
//         for(let i = 0; i < prevSquares.length; i++) {
//             const currentSquare = prevSquares[i]
//             if(currentSquare.id === id) {
//                 const updatedSquare = {
//                     ...currentSquare,
//                     on: !currentSquare.on
//                 }
//                 newSquares.push(updatedSquare)
//             } else {
//                 newSquares.push(currentSquare)
//             }
//         }
//         return newSquares
//     })
// }



  const squareElements = squares.map(square => (
    <Box  
      key={square.id}
      id={square.id} 
      on={square.on} 
      toggle={toggle}
      />
    // <div style={styles} ></div>
  ))


  return (
   <main>
      {squareElements}
   </main>
  )
}

export default App
