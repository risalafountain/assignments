import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import CardDetails from './Components/CardDetails'
import SavedCards from './Components/SavedCards'
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
{/* these set the routes and endpoints in the url */}
      <Route path = "/" element={<Home />}/>
      <Route path = "/favorites" element={<SavedCards />}/>
      <Route path = "/details/:id" element = {<CardDetails />} />
    </Routes>
    </>
  )
}

export default App

