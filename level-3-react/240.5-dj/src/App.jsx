import './App.css'
import Square from './components/Square'
// import boxes from './components/boxes'
import React from 'react'

export default function App() {
  const [colors, setColors] = React.useState(["white", "white", "white", "white"])
  const colorElements = colors.map(color => (
    <Square className ='square'  color={color} />
    ))

    function handleSmall(){
      console.log("DJ Small button was clicked")
      //toggle between white and black
        //map through colors array, if the colors are white, turn them black and vice versa
      setColors(prevColors => prevColors.map(color => color === "white" ? "black" : "white"))
    }
    
    function handleParty(){
      console.log("Party DJ button was clicked")
      //turn the top squares purple
        //edit the array and change the first two indexes ---when i used ..prevColors, it added to the original array!
        //slice(0,1) this deletes the first two permanently!
        setColors(prevColors => ["purple", "purple", ...prevColors.slice(2)])
        //problem? the first two turn purple but wont go back to white when i click again
      }

    return (
      <main className='container'>
      <div className='squares--only'>
        {colorElements}
      </div>
      <button className='button' onClick={handleSmall}>DJ Small</button>
      <button className='button' onClick={handleParty}> Party DJ</button>

    </main>

)
}

// <Square color={colors[0]}/>
// <Square color={colors[1]}/>
// <Square color={colors[2]}/>
// <Square color={colors[3]}/>
