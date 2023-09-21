import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer"
import Card from './components/Card'
import data from './components/data'

function App() {
  const vacation = data.map(item => {
    return (
      <Card 
      key = {item.id}
      {...item}
      />
    )
  })
  return (
    <div >
      <Header /> 
      <section className='card--details'>
          {vacation}
        </section>  
      <Footer />

    </div>
  )
}

export default App
