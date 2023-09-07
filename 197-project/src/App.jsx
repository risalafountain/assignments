import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
// import swimImg from "./images/swim2.png"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
        img="./images/swim2.png"
        rating= " 5.0"
        reviewCount = {6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
      {/* <Card 
        img="./images/wedding.png"
        rating= " 5.0"
        reviewCount = {30}
        country="USA"
        title="Learn Wedding Photography"
        price={125}
      />
      <Card 
        img="./images/bike.png"
        rating= " 4.8"
        reviewCount = {2}
        country="USA"
        title="Group Mountain Biking"
        price={50}
      /> */}


    </div>
  )
}

export default App
