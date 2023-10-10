import React from "react";
import memesData from "./memesData";
import { useState} from 'react'

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage:"../images/default.jpg "
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        // access the arr and get an object
        const memesArray = allMemeImages.data.memes
        // randomize Selection
        const randomNumber = Math.floor(Math.random() * memesArray.length)
       // console.log(randomNumber)
        
        // get image object by index into meme as array and index of  random number
        const url = memesArray[randomNumber].url 
        console.log(url)//this is randomizing! it works
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
            {/*put the form in a div instead of a form tag because  there is a button, which will refresh the page unless we stop it */}
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
                <img src={meme.randomImage} className="meme--image" />
            </div>
        </main>
    )
}