import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // p5 import Link


function Card(props) {
    const { name, imageUrl, card, id } = props

    console.log(props.id)
    //fires within a function or onClick etc..
    const navigate = useNavigate()
    // const cards = cardData.map(card => (<h3 key ={card.id}>
    //     This is in the Card component
    // </h3>))

    function handleClick(event) {
        event.preventDefault()
        navigate(`/details/${id}`)
    }

    console.log('this is the Card component props', props, 'card', card)
    return (
        <div className='card' onClick={handleClick}>
            <h1>{name}</h1>
            <img src={imageUrl} />
        </div>
    );
}

export default Card;

//useParam (what is used in the details page )
//useNavigate
//combine with onClick