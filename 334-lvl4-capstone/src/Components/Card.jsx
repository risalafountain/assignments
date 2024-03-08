import React, { useState } from 'react';

function Card(props) {

    console.log(props)
    const { name, imageUrl } = props
    return (
        <div className='card'>
            <h1>{name}</h1>
            <img src={imageUrl} />
        </div>
    );
}

export default Card;

//useParam (what is used in the details page )
//useNavigate
//combine with onClick