import React from "react";

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data =>console.log(data))
        // .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage(){

    }

    return(
        <div className="form">
           <input
            type="text"
            placeholder="Top Text"
            className="form--input"
            name= "topText"
           />

           <input 
           type="text"
           placeholder= "Bottom Text"
           className="form--input"
           name=""
           />

           <button
            className="submit--button"
           >
           Refresh Meme Image
           </button>

           {/* <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText} </h2>
            <h2 className="meme--text bottom"> {meme.bottomText}</h2>
            </div> */}
        </div>
    )
}
