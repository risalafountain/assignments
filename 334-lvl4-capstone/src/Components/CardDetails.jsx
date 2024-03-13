import { useParams } from "react-router-dom" //params 1
import React, { useState, useContext } from 'react';
import { magicContext } from "../Context/ContextProvider";

function CardDetails() {
    const { id } = useParams()
    const { magicData, newFave, faveCards } = useContext(magicContext)
 const foundCard= magicData.find(card=> card.id === id)
 console.log(foundCard)
 const isSaved = faveCards.includes(foundCard)

if(!foundCard){
    return <div></div>
}

    return (
        <div>
            <h1>Title: {foundCard.name}</h1>
            <h1>Image:{foundCard.printings.map(print => <p>{print}</p>)}</h1>
            <h3>Rarity:</h3>
            {!isSaved && <button onClick={()=>newFave(foundCard)}>Click to Save</button>}
        </div>
    )
}

export default CardDetails;


{/* //use params here */ }
            //build a navbar to take me back to home page
            //put it above my routes
            //create navbar see roto routeer links for help