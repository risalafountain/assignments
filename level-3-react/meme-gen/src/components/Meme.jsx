import React from "react";
// import memesData from "./memesData";

export default function Meme(){
    // const [meme, setMeme] = React.useState({
    //     topText: "", 
    //     bottomText: "", 
    //     randomImage:"../images/default.jpg "
    // })

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setAllMemeImages(data.data.memes))
    }, [])
// this is a good test but the data will be logged for EVERY keystroke
    // console.log(allMemeImages)

    function getMemeImage(){
        // access the arr and get an object
        // const memesArray = allMemeImages.data.memes
        // randomize Selection
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
       // console.log(randomNumber)
        
        // get image object by index into meme as array and index of  random number
        const url = allMemeImages[randomNumber].url 
        console.log(url)//this is randomizing! it works
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value
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
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                type="text"
                placeholder="Bottom Text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                 > 
                    Get a new meme image  🖼
                 </button>
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText} </h2>
                    <h2 className="meme--text bottom"> {meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}

// Resize screen to 862 x 962 for css to look right