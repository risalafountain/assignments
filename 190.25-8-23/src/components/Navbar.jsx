import React from "react"
import coolImg from "./images/group.png"

function Navbar() {
    return (
        <nav>
          <img src={coolImg} className ="nav--icon" />

          <h3 className ="nav--logo_text">React Facts</h3>
          <h4 className ="nav--title">React Course - Project 1</h4>
        </nav>
        
    )
  }
  
export default Navbar