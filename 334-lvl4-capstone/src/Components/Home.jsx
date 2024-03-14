//all cards listed home 
//CARD DETAILS click on the card to get more details 
//FAVORITE CARDS save the cards they like 

import React, { useState, useContext } from 'react';
import { magicContext } from '../Context/ContextProvider';
import Card from './Card';
import NavBar from './NavBar';


function Home() {
    //destructuring the object
    const { magicData } = useContext(magicContext)
    const [toggle, setToggle] = useState(false)
    const filteredCards = magicData.filter(card => card.imageUrl)
    console.log('filteredCards', filteredCards)

    const cardList = filteredCards.map(card => {
        return (
            <Card key={card.id} {...card} />
        )
    })

    return (
        <div className='homeContainer main'>
            {cardList}
        </div>
    );
}

export default Home;