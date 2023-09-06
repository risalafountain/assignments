import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='contacts'>
      <Contact 
          img="./images/mr-whiskerson.jpg"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
          />
      <Contact 
         img="./images/fluffykins.jpg"
         name="Fluffykins"
         phone="(212) 555-2345"
         email="fluff@me.com"
      />
      <Contact 
        img="./images/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"        
      />
      <Contact 
        img="./images/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />

    </div>
  )
}

export default App
