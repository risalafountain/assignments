import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [gradient, setGradient] = useState({
  //   color1: "",
  //   color2: "",
  //   angle: "50deg"
  // })

  const [angle, setAngle] = useState("50deg", "90deg", "180deg")
  const [color1, setColor1] = useState('pink')
  const [color2, setColor2] = useState('purple')

  // each radio input needs a handle change to save the change and set state
  handleChange(){

  }

  //for the button
  handleSubmit(){

  }
  return (
    <main className='form'>
      <div className='gradient-preview'>
        <h1>Color Gradient Generator</h1>

        <div className='colors'>
          <h2>Color 1</h2>
          <input
            type="color"
            className='color'
            name="color1"
            // value={gradient.color1}
            value={color1}
          />
        </div>

        <div className='colors'>
          <h2>Color 2</h2>
          <input
            type="color"
            className='color'
            name="color2"
            // value={gradient.color2}
            value={color2}
          />
        </div>

        <div className='angle'>
          <h2>Angle</h2>
          <li>
            <input
              type="radio"
              // if they all have the same name only one can be selected at a time
              name="angle"
              // value={gradient.angle}
              value={"90deg"}
            />
            90 deg
          </li>
          <li>
            <input
              type="radio"
              name="angle"
              // value={gradient.angle}
              value={"180deg"}
            />
            180 deg
          </li>
          <li>
            <input
              type="radio"
              name="angle"
              // value={gradient.angle}
              value={"50deg"}
            />
            50 deg
          </li>

        </div>


        <div className='preview'>
          <h1>Preview</h1>
          {/* generate preview by passing in the colors and angle selected  */}
          {/* {gradient?}  */}
          <button>Generate Preview</button>
          {/* how do i display the preview here? create an empty div?  */}
          <textarea className='text-code'>
            this is the text area which will generate the css code
          </textarea>
        </div>
      </div>

    </main>


  )
}

export default App

/*
1. create boxes for the color gradient choices w/ text box? 
2. create a preview
3. create text area to hold css code 
*/ 