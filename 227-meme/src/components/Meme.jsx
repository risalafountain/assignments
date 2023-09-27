import React from "react";

/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 * 
 * best to layout using grid in css
 */

export default function Meme(){
    return(
        <main>
            <form className="form">
                <input 
                type="text"
                placeholder="Top Text"
                className="form--input"
                />
                <input 
                type="text"
                placeholder="Bottom Text"
                className="form--input"
                />
                <button className="form--button"> Get a new meme image  🖼</button>
            </form>
        </main>
    )
}