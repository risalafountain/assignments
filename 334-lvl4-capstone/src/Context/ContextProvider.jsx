import React, { useState, useEffect, createContext } from 'react';
export const magicContext = createContext()
import axios from 'axios'
export default function MagicProvider(props) {

    const [magicData, setMagicData] = useState([])
    const [faveCards, setFaveCards] = useState([])

    useEffect(() => {
        axios.get("https://api.magicthegathering.io/v1/cards")
            .then(response => setMagicData(response.data.cards))
            .catch(error => console.log(error))
    }, [])
    function newFave(card) {
        setFaveCards(prevFaveCards => [...prevFaveCards, card])
    }
    // console.log(magicData)
    // console.log(faveCards)
    return (
        <magicContext.Provider value={{ magicData, newFave, faveCards }}>
            {props.children}
        </magicContext.Provider>
    )
}