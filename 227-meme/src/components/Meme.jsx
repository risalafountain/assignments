import React from "react";
import memesData from "./memesData";


export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        // access the arr and get an object
        const memesArray = memesData.data.memes
        
        // randomize Selection
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // console.log(randomNumber)
        
        // get image object by index into meme as array and index of  random number
        setMemeImage(memesArray[randomNumber].url) 
        //console.log(url)//this is randomizing! it works
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
                <img src={memeImage} className="meme--image" />
            </div>
        </main>
    )
}

/**235.75-Add Images to the Meme Generator

* Challenge: Save the random meme URL in state
* - Create new state called `memeImage` with an empty string as default
* - When the getMemeImage function is called, update the `memeImage` state to be the random chosen
*   image URL * - Below the div.form, add an <img /> and set the src to the new `memeImage` state you created
*add some styling to make sure the image stays within its boundaries
*/        

/**project startup
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 * 
 * best to layout using grid in css
 * 
 *     function getMemeImage() {
        // access the arr and get an object
        const memesArray = memesData.data.memes
        // randomize Selection
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // console.log(randomNumber)
        // get image object by index into memeas array and index of random number
        const url = memesArray[randomNumber].url //this line is incomplete!
        //console.log(url)
    }

 */
