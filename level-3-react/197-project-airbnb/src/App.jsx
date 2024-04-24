import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from "./components/data" //will be able to use api in the future
// import swimImg from "./images/swim2.png"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
//
export default function App() {
  //console.log("inside app comp data:", data)
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        //item={item}
        //this spread operator (spreads all the properties of the item into separate props--need to get rid of all instances of "item" in the card component)
        {...item} 

        />
      )
    })
    
    return (
      <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}

{/* <Card 
//this data is rendered in the correct spot but is hard coded in  
// img="./images/swim.png"
// rating= " 5.0"
// reviewCount = {6}
// location="USA"
// title="Life Lessons with Katie Zaferes"
// price={136}
/> */}

//this data is also done ok but there is a way to fix the component that will allow it to appear cleaner 
// <Card 
// key={item.id} 
// img={item.coverImg} //data has diff property than what we chose to call our prop
// rating={item.stats.rating}
// reviewCount={item.stats.reviewCount}
// location={item.location}
// title={item.title}
// price={item.price}
// openSpots={item.openSpots}
// />
