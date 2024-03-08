import React, { useState, useEffect, createContext } from 'react';
export const magicContext = createContext()
import axios from 'axios'
export default function MagicProvider(props) {

    const [magicData, setMagicData] = useState([])

    useEffect(() => {
        axios.get("https://api.magicthegathering.io/v1/cards")
            .then(response => setMagicData(response.data.cards))
            .catch(error => console.log(error))
    }, [])

    // console.log(magicData)
    return (
        <magicContext.Provider value={{ magicData }}>
            {props.children}
        </magicContext.Provider>
    )
}