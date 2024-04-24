import { useParams } from "react-router-dom" //params 1
import React, { useState, useContext } from 'react';
import { magicContext } from "../Context/ContextProvider";

function CardDetails() {
    //accesses the id 
    const { id } = useParams()
    //receives values from magicContext provider
    const { magicData, newFave, faveCards } = useContext(magicContext)
    //search for the card that matches the id of the selected card
    const foundCard = magicData.find(card => card.id === id)
    // console.log(foundCard)
    const isSaved = faveCards.includes(foundCard)

    if (!foundCard) {
        return <div></div>
    }

    return (
        <div className="main list">
            <h1>{foundCard.name}</h1>
            <img src={foundCard.imageUrl} />
            <h2>{foundCard.originalType}</h2>
            <h2>Artist: {foundCard.artist}</h2>
            <h2>Mana Cost: {foundCard.manaCost}</h2>
            <h2>Rarity: {foundCard.rarity}</h2>
            <h2>{foundCard.originalText}</h2>
            {/* if card is saved already, the button disappears  */}
            {!isSaved && <button onClick={() => newFave(foundCard)}>Click to Save</button>}
        </div>
    )
}

export default CardDetails;


{/* //use params here */ }
            //build a navbar to take me back to home page
            //put it above my routes
            //create navbar see roto routeer links for help