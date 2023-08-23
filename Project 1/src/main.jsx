import React from 'react'
import ReactDOM from 'react-dom'
//import App from './App.jsx'
import './index.css'
import Header from "./Header"
import MainContent from './MainContent'
import Footer from './Footer'

//since this project is so small we don't need to create a file for Page

function Page() {
  return (
    <div>
      <Header />  
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))

// .render(
// <React.StrictMode>
//   <App />
// </React.StrictMode>, )




//creating this variable is a good idea but it becomes very difficult to maintain best to create custom components

// const page = (
//   <div>
//       <img src="./react.svg" width="40px" />
//       <h1>Fun facts about React</h1>
//       <ul>
//           <li>Was first released in 2013</li>
//           <li>Was originally created by Jordan Walke</li>
//           <li>Has well over 100K stars on GitHub</li>
//           <li>Is maintained by Facebook</li>
//           <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//   </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

//try instead by writing a function that returns react elements--it is considered in react a "component"

//components are diff from JS functions because they require you to use Pascalcase(capitalize the first letter of the component, and wrap the component in angled braces)
// function TemporaryName() {
//   return (
//       <div>
//           <img src="./react.svg" width="40px" />
//           <h1>Fun facts about React</h1>
//           <ul>
//               <li>Was first released in 2013</li>
//               <li>Was originally created by Jordan Walke</li>
//               <li>Has well over 100K stars on GitHub</li>
//               <li>Is maintained by Facebook</li>
//               <li>Powers thousands of enterprise apps, including mobile apps</li>
//           </ul>
//       </div>
//   )
// }

// ReactDOM.render(<TemporaryName />, document.getElementById("root"))


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



