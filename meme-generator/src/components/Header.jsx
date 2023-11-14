import React from "react";

export default function Header(){
    return(
       <header className="header">
        <img 
            src = "./images/logo.png" 
            className="header--image"/>
        {/* <h2 className="header--title">Meme Generator</h2> */}
        {/* <h2 className="header--title">Meme Generator</h2> // i ended up copying the image with the text from figma*/}
        <h4 className="header--project">React Course - Project 3</h4>
       </header>
    )
}