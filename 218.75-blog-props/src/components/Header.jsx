import React from "react";
import Navbar from "./Navbar";

export default function Header() {
   return (
       <header>
            

            <Navbar />
            {/* <img src = "./images/home-bg.jpg" className="header--photo" />/> */}
           
            <div className="header--content">
                <h1 className="header--title">Clean Blog</h1>
            <span className="header--subtitle">A Blog Theme by Start Bootstrap</span>
            </div>
            [`|+
            `]
       </header>
   ) 
}

