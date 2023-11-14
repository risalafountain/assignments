import React from 'react'
import './App.css'

function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
//get the data from the starwars api 
  // fetch("https://swapi.dev/api/people/1")
//resolve console first to verify verify it works, then setStarWarsdata {this causes INFINITE LOOP! }
  // .then(res => res.json())
  // .then(data => console.log(data))



  return (
    <div>
      {/* update first parameter with starWarsData */}
      <pre>{JSON.stringify(starWarsData,null,2)}</pre>
    </div>
  )
}

export default App

/*NOTES: 
getting data from an API consists of 2 parts 
1. GET the data (fetch)
2. save the data to state 
once it is saved in state, the application can interacts with data etc. 

get the data from the star wars api 
  fetch("url")
resolve the promise we get from fetch where it will receive a response (JSON) which will be turned into a javascript object 
console log the data for now 

--once the page is refreshed, the way it is setup is creating an infinite loop of the App componenent being rendered 

that is happening because the fetch lives on the top level of the component. each time it will call fetch it is also setting the starWarsData in state and rerendering the component {repeat}

need to learn how to handle  side effects
SEE useEffect notes in src 
*/
