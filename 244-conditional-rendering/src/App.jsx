import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [messages, setMessages] = useState("a", "b")

  return (
   <div>
    {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
   </div>
  )
}

export default App

/*
challenge: 
--only display the h1 below
1. use {messsages.length}
2. to determine whether you want to display the h1 at all, use the logical && operator to say that if messages.length is greater than zero and display the h1
  {messages.length > 0 && <h1>You have {messages.length} unread}


 */