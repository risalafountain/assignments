import React from "react"

function Header() {
    return (
       <header>
          <nav className = "nav">
            <img src = "./react.svg" className = "nav-logo"/>
            <h3>React Course - Project 1</h3>
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
       
        </header>
    )
  }

  export default Header