import './App.css'
import FriendList from "./components/FriendList"
import Friend from "./components/Friend"
import Pet from './components/Pet'
import data from './components/data'


function App() {
  const amigo = data.map(item => {
    return (
      <FriendList 
      key = {item.id}
      {...item}
      />
    )
  })
  return (
      <div>
        <h5>this is typed in app.jsx as a place holder for MAYBE? a header</h5>
        {amigo}
        <Friend />
        <Pet />
      </div>
  )
}

export default App
