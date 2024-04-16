import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'

function App() {

  return (
    <>
     <NavBar />
     <Routes>
      <Route path = '/' element = {<Home/>} />
     </Routes>
    </>
  )
}

export default App
