import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [messages, setMessages] = useState(["a", "b", "c"])

  return (
   <div>
    {
      messages.length === 0 ?
      <h1>You're all Caught up!</h1>:
      <h1>You have {messages.length} unread <br/>
      {messages.length > 1 ? "messages" : "message"}</h1>
    }

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

  ############################244 conditional rendering exercise 
Challenge: see notes
--If there are no unread messages, display "You're all caught up!"
--If there are > 0 unread messages, display "You have <n> read messages"
    -if thre's exactly 1 unread message, display "message" instead of messages 

This reads if messages.length === 0 then display "You're all caught up!" else display you have <n> unread {if messages.length >1 display "message" else display "message"}
      messages.length === 0 ?
      <h1>You're all Caught up!</h1>:
      <h1>You have {messages.length} unread <br/>
      {messages.length > 1 ? "messages" : "message"}</h1>

it's easier to read and understand if we write it out on multiple lines THIS IS JUST ONE WAY TO FIGURE IT OUT 

edit the number of messages that displays by editing the array in useState i.e. ["a"] === 1 unread message; ["a", "b", "c"] === 3 unread messages 


###############################245.5 conditional rendering quiz

1. What is "conditional rendering"?

When we want to only sometimes display something on the page based on a condition of some  sort 

2. When would you use &&?

Used when you want to display something or not at all. what goes before the && is the condition and if that condition is truthy then the rest will display


3. When would you use a ternary?

Used to decide which of two things to display. HIGHLY recommend NOT TO NEST TERNARY

4. What if you need to decide between > 2 options on
   what to display?
Use an `if...else if... else` conditional or a `switch` statement

&& and ternary can happen directly inline in the return statement 
the if/else/if or switch statments must occur outside of the return statement, set a variable and use the statement/blocks 



 */