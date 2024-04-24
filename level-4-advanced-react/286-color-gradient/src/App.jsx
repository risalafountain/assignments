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
  const [color1, setColor1] = useState('#FF0000')
  const [color2, setColor2] = useState('#0000FF')
  // const [preview, setPreview] = useState({
  //   angle: "angle",
  //   color1: "color1",
  //   color2: "color2"
  // }
  // )

  // each radio input needs a handle change to save the change and set state
  function handleChange(event) {
    const { name, value } = event.target
    console.log(event.target.value)

    // setAngle((prevAngle) => ({
    //   [name] : value
    // }))


    // if/else statements and set state 
    if (name === "color1") {
      // console.log({color1})
      setColor1(value)

    } else if
      (name === "color2") {
      setColor2(value)

    } else if
      (name === "angle") {
      setAngle(value)

      setPreview(prevPreview => ({
        ...prevPreview,
        [name]: value
      })
      )
    }
  }



  //for the button
  // handleSubmit( ){
  // }

  return (
    <main className='form'>
      <div className='gradient-setup'>
        <h1>Color Gradient Generator</h1>

        <div className='colors'>
          <h2>Color 1: {color1}</h2>
          <input
            type="color"
            className='color'
            name="color1"
            // value={gradient.color1}
            value={color1}
            onChange={handleChange}

          />
        </div>

        <div className='colors'>
          <h2>Color 2: {color2}</h2>
          <input
            type="color"
            className='color'
            name="color2"
            // value={gradient.color2}
            value={color2}
            onChange={handleChange}

          />
        </div>

        <div className='angle'>
          <h2>Angle</h2>
          <li>
            <input
              type="radio"
              name="angle"
              // value={gradient.angle}
              value={"50deg"}
              onChange={handleChange}
            />
            50 deg
          </li>
          <li>
            <input
              type="radio"
              // if they all have the same name only one can be selected at a time
              name="angle"
              // value={gradient.angle}
              value={"90deg"}
              onChange={handleChange}

            />
            90 deg
          </li>
          <li>
            <input
              type="radio"
              name="angle"
              // value={gradient.angle}
              value={"180deg"}
              onChange={handleChange}
            />
            180 deg
          </li>
       

        </div>


        <div className='preview'>
          <h1 >Preview</h1>
          {/* generate preview by passing in the colors and angle selected  */}
          
          <div className='preview-box'style={{ background: `linear-gradient(${angle}, ${color1}, ${color2})` }}>
         
            {/* <textarea className='text-code'>
            this is the text area which will generate the css code
          </textarea> */}

          </div>
          <p>Copy CSS Code below:</p>
          <hr/>
          <textarea readOnly 
          className="text-code" 
          value= {`background: linear-gradient(${angle}, ${color1} , ${color2}); \n-moz-background:linear-gradient(${angle}, ${color1} , ${color2});\n-webkit: linear-gradient(${angle}, ${color1} , ${color2})`} />
          {/* {gradient?}  */}
          {/* <button>Generate Preview</button>
          how do i display the preview here? create an empty div?  */}

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