import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      <h1>App Component</h1>
    </div>
  )
}

export default App
