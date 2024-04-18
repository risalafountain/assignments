import React, { useContext, useState } from 'react';
import { Context } from '../Context/ContextProvider';

export default function FaveCard(props) {
    const { deleteFavorite, copyToHome } = useContext(Context)
    const { title, imageUrl, _id } = props

    //running into duplicate key err 
    //and post returning err 500
    function handleCopy() {
        copyToHome(_id)
    }

    function handleDelete() {
        console.log('DEL:' + _id)
        deleteFavorite(_id)
    }

    return (
        <div className='card'>
            <p>Title: {title}</p>
            <img src={imageUrl}
                style={{ width: '150px', height: '150px' }}
            />
            <button onClick={handleCopy}>Add to List</button>
            <button onClick={handleDelete}>Unfavorite</button>
        </div>
    )
}

