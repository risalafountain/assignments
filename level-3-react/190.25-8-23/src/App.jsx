import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './App.css'
import Navbar  from './components/Navbar'
import MainContent from './components/MainContent'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className = "container">
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App
