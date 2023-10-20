import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Joke from "./components/Joke"
import jokesData from './components/jokesData'


function App() {
  console.log(jokesData)
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  return (
    <div className='container--parent'>
      
      {jokeElements}
    </div>
  )
}

export default App

{/* <Joke 
 setup="I got my daughter a fridge for her birthday." 
 punchline="I can't wait to see her face light up when she opens it." 
 isPun={true}
 />

 <Joke 
 setup="How did the hacker escape the police?" 
 punchline="He just ransomware!"
 isPun={true} 
 />
 
 <Joke 
 setup="Why don't pirates travel on mountain roads?" 
 punchline="Scurvy." 
 isPun={true}
 />

 <Joke 
 setup="Why do bees stay in the hive in the winter?" 
 punchline="Swarm."
 isPun={true} 
 />

 <Joke 
 setup="What's the best thing about Switzerland?" 
 punchline="I don't know, but the flag is a big plus!" 
 isPun={false}
 /> */}
