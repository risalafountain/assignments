import React from "react";
import SingleMeme from "./SingleMeme";
import { v4 as uuid } from "uuid"

export default function Meme() {
    const [allMemeImages, setAllMemeImages] = React.useState([])

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: { url: "https://i.imgflip.com/wxica.jpg" }
    })
    // console.log(meme.randomImage.url)
    // console.log(meme)
    const [savedMemes, setSavedMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            // .then(res => res.json())
            .then(data =>console.log(data))
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage() {
        //get all meme images
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        // console.log(randomNumber)
        setMeme(prev => {
            return {
                ...prev,
                randomImage: allMemeImages[randomNumber]
            }
        })
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    // console.log(savedMemes)

    //take saved meme and save it to state savedMemes
    function handleSave() {
        // console.log('HANDLESAVE MEME:', meme, 'savedMemes:', savedMemes)
        setSavedMemes(prev => ([...prev, {
            topText: meme.topText,
            bottomText: meme.bottomText,
            randomImage: meme.randomImage.url,
            id: uuid(),
        }]))

        setMeme({
            topText: "",
            bottomText: "",
            randomImage: { url: "https://i.imgflip.com/wxica.jpg" }
        })
    }

    //pass down as props in Single Meme
    function handleDelete(id) {
        //delete the meme //remove from savedMemes array
        //put in id as a parameter use filter 
        const newSavedList = savedMemes.filter
            //return all memes that do not match what is passing into it 
            ((meme) => meme.id !== id)
        setSavedMemes(newSavedList)
    }

    //build newEdit to handle save 
    function newEdit(id, edits ){
        //map over 
        setSavedMemes(prevSavedMemes => prevSavedMemes.map((meme) => meme.id === id ? edits : meme))

    }
   
//map over array savedMeme state create new div with items --create new componenent to house each individual meme (SingleMeme)
    const memeList = savedMemes.map(meme => {
        // { console.log('meme map meme:', meme) }
        return (

            <SingleMeme
                meme={meme}
                handleDelete={handleDelete}
                //commenting these lines disables my delete functinality??
                randomImage={meme.imgUrl}
                topText={meme.topText}
                bottomText={meme.bottomText}
                id={meme.id}
                newEdit={newEdit}
            />
        )
    })

    return (
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
                className="submit--button"
                onClick={getMemeImage}
            >
                Refresh Meme Image
            </button>
            <button
                className="save--button"
                onClick={handleSave}
            >
                save
            </button>

            <div className="meme">
                <img src={meme.randomImage.url} className="meme--image" />
                <h2 className="meme--text top">{meme.topText} </h2>
                <h2 className="meme--text bottom"> {meme.bottomText}</h2>
            </div>

            <div className="meme--container">
                {memeList}
            </div>
        </div>
    )
}
