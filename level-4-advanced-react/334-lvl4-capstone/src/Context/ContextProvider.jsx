import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios'

export const magicContext = createContext()

export default function MagicProvider(props) {
//empty arrays to store data 
    const [magicData, setMagicData] = useState([])
    const [faveCards, setFaveCards] = useState([])

//useEffect gets the data from the api and sets the magicData to the cards received
//empty dependency array means it will only run once 
    useEffect(() => {
        axios.get("https://api.magicthegathering.io/v1/cards")
            .then(response => setMagicData(response.data.cards))
            .catch(error => console.log(error))
    }, [])

//add new cards to the fave cards array 
    function newFave(card) {
        setFaveCards(prevFaveCards => [...prevFaveCards, card])
    }

    return (
//allows the children to have access to the values 
        <magicContext.Provider value={{ magicData, newFave, faveCards }}>
            {props.children}
        </magicContext.Provider>
    )
}