import React from "react";
import logo from "./images/airbnb1.png"


function Navbar(){
    return (
        <nav>
            <img src = {logo} className = "nav--logo" />
        </nav>
    )
}

export default Navbar