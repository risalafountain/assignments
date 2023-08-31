import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

export default App
