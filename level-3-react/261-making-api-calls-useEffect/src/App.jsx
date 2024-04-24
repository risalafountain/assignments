import React from 'react'
import './App.css'

function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  console.log("Component Rendered")
//get the data from the starwars api 
  // fetch("https://swapi.dev/api/people/1")
//resolve console first to verify verify it works, then setStarWarsdata {this causes INFINITE LOOP! }
  // .then(res => res.json())
  // .then(data => console.log(data))

//side effects
//for the challenge in 262.5 use arrow function instead of the word. don't forget the dependencies array.
React.useEffect(() =>{
  // console.log("effect function ran")
//get the data from the starwars api 
  fetch(`https://swapi.dev/api/people/${count}`)
//updatge state when receiving the data
  .then(res => res.json())
  .then(data => setStarWarsData(data))
}, [count])

  return (
    <div>
      {/* update first parameter with starWarsData */}
      <pre>{JSON.stringify(starWarsData,null,2)}</pre>
      <h2>The Count is: {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get the Next Character</button>
    </div>
  )
}

export default App

