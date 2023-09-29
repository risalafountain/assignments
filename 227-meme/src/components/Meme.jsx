import React from "react";
import memesData from "./memesData";

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
    function getMemeImage() {
        // access the arr and get an object
        const memesArray = memesData.data.memes
        // randomize Selection
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // console.log(randomNumber)
        // get image object by index into memeas array and index of random number
        const url = memesArray[randomNumber].url
        //console.log(url)
    }
    return(
        <main>
            {/*put the form in a div instead of a form tag because since there is a button, it will refresh the page unless we stop it */}
            <div className="form">
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
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                    > 
                    Get a new meme image  🖼
                    </button>
            </div>
        </main>
    )
}