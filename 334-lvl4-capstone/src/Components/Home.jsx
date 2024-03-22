//all cards listed home 
//CARD DETAILS click on the card to get more details 
//FAVORITE CARDS save the cards they like 

import React, { useState, useContext } from 'react';
import { magicContext } from '../Context/ContextProvider';
import Card from './Card';
import NavBar from './NavBar';


function Home() {
    //destructuring the object [?]
    const { magicData } = useContext(magicContext)
    //am i using this?
    const [toggle, setToggle] = useState(false)
    //filter out the cards that do not have an imageUrl
    const filteredCards = magicData.filter(card => card.imageUrl)
    console.log('filteredCards', filteredCards)
//map over list of filteredcards and for each card create key plus spread in all the details of the card props. Props are received from the magicData in filteredCards. 
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