import React from "react"

export default function ColorChange() {
    const [color, setColor] = React.useState(true)
      //console.log(color) //true/false use boolean instead of color names

      //return the opposite of what is in the circle to toggle between the two colors
      function switchColor() {
        setColor(prevState => ! prevState)
      }
  
    return (
      <div className='container'>
          <h1 className='container--title'>Click the circle to change the Color</h1>
          <button className='button' onClick={switchColor}>{color ? "pink" : "blue"}</button>
          {/*if color is true show pink else show blue*/}
      </div>
    )
  }