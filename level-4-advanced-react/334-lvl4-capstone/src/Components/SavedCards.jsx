import React, { useState, useContext } from 'react';
import { magicContext } from '../Context/ContextProvider';
import Card from './Card';


function SavedCards() {
const {faveCards} = useContext(magicContext)

const favoriteCardList = faveCards.map(card => {
    return (
        <Card key ={card.id} {...card} />
    )
})
    return ( 
        <div className='main list'>{favoriteCardList}</div>
     );
}

export default SavedCards;