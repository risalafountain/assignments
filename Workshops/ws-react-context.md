# What is React Context? 
 - it is a way to share data and functionality between components in a React application without having it pass props down through every level of the component tree. 
 - think of it as a global bulletin board or shared space where nay component can access and update information 

 # What is it for? 
 - Ideal for Sharing
    - Global data (e.g. user auth, theme preferences)
    - Frequently accessed data (e.g. cart items, current user profile)

# How it scales? 
- can be used with large, complex component trees to avoid excessive prop drilling 
- improves performance by reducing unnecessary re-renders

# Pros 
- Avoids prop drilling 
- simplifies data sharing across multiple components 
- potentially improves performance 

# Cons 
- can introduce complexity if overused 
- might make it harder to track data flow in larger applications 
- potential for performance overhead if used with frequently updating data 

Project: light-dark 
* index component 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </StrictMode>,
);

* app.js
import React, { useContext } from "react";
import "./styles.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { Routes, Route, Link } from "react-router-dom";
import { Context } from "./context/Context";

export default function App() {
  const { darkMode, toggleDarkMode } = useContext(Context);
  return (
    <div className={`App ${darkMode ? "darkMode" : "lightMode"}`}>
      <nav
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "space-around",
        }}
      >
        <Link to="/" className={`link ${darkMode ? "darkMode" : "lightMode"}`}>
          Home
        </Link>
        <Link
          to="/profile"
          className={`link ${darkMode ? "darkMode" : "lightMode"}`}
        >
          Profile
        </Link>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

* Context.js
import React, { useState } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [username, setUsername] = useState("vschooler123");

  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <Context.Provider value={{ username, darkMode, toggleDarkMode }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };

* components > Home.js
import React, { useContext, useState } from "react";

export default function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <h2>What is React Context?</h2>
      <ul>
        <li>
          It's a way to share data and functionality between components in a
          React application without having to pass props down through every
          level of the component tree.
        </li>
        <li>
          Think of it as a global bulletin board or shared space where any
          component can access and update information.
        </li>
      </ul>
      <h2>What is it for?</h2>
      <ul>
        <li>Ideal for sharing:</li>
        <li>
          Global data (e.g., user authentication state, theme preferences)
        </li>
        <li>
          Frequently accessed data (e.g., cart items, current user profile)
        </li>
        <li>Data that needs to trigger updates in multiple components</li>
      </ul>
      <h2>How it scales:</h2>
      <ul>
        <li>
          Can be used with large, complex component trees to avoid excessive
          prop drilling
        </li>
        <li>Improves performance by reducing unnecessary re-renders</li>
      </ul>
      <h2>Pros:</h2>
      <ul>
        <li>Avoids prop drilling</li>
        <li>Simplifies data sharing across multiple components</li>
        <li>Potentially improves performance</li>
      </ul>
      <h2>Cons:</h2>
      <ul>
        <li>Can introduce complexity if overused</li>
        <li>Might make it harder to track data flow in larger applications</li>
        <li>
          Potential for performance overhead if used with frequently updating
          data
        </li>
      </ul>
    </div>
  );
}

* components > Profile
import React, { useContext } from "react";
import { Context } from "../context/Context";

export default function Profile(props) {
  const { username } = useContext(Context);
  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome {username.toUpperCase()}!</p>
      <h2>Context Instructions</h2>
      <ul>
        <h2>Context Provider</h2>
        
        <li>1. Create Context.js within the context folder</li>
        
        <li>2. Create context Hook by using const Context = React.createContext() </li> 
        
        <li>3. Create ContextProvider function
            this looks like this: 
                function ContextProvider(props) {
                    const [username, setUsername] = useState('vschooler123')
                    const [darkMode, setDarkMode] = useState(true)

                    function toggleDarkMode() {
                        setDarkMode(!darkMode)
                    }
                    console.log(darkMode)
                    return (
                        <Context.Provider value = {{username, darkMode, toggleDarkMode}}>
                            {props.children}
                        </ Context.Provider>
                        )
                }

                export { Context, ContextProvider} //contextProvider name of our component and Context is what was instatiated at the top and what we will consume 
                    </li>

        <li>4. Provide data through value tag within the opening tag of Context.Provider pass in the values you want to be able to consume </li>

        <h2>Wrapping App in Context Provider</h2>
        
        <li>1. Import ContextProvider into main or index file</li>
            import {Context Provider} from "./context/Context"        
        <li>2. Wrap App Component in ContextProvider tags </li>
            make sure to only wrap APP not Router

        <h2>Consuming Context</h2>
        <li>1. import useContext hook in Profile (or wherever we want to consume context) 
            import React, {useContext} from 'React' 
        </li>

        <li>2. import Context (where are we getting context from?) import {Context} from '../context/Context' </li>

        <li>3. destructure context value from Context</li>
            pull out whatever we want out of the value tag
            const {username} = useContext(Context) <= open useContext hook and (put where I want to use it from)
        <li></li>
        replace hard coded data <p> Welcome user! </p> with Welcome {username}!
      </ul>
    </div>
  );
}

* styles.css
body {
  padding: 0;
  margin: 0;
}

.App {
  font-family: sans-serif;
  text-align: center;
}

ul {
  list-style-type: disc;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.lightMode {
  background-color: antiquewhite;
  color: #000;
}

.darkMode {
  background-color: rgb(49, 49, 49);
  color: white;
}

.link {
  text-decoration: none;
  cursor: pointer;
}




