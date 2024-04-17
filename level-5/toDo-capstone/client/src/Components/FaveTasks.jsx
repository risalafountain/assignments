import React, { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../Context/ContextProvider';

export default function FaveTasks(){
    const {FaveTasks} = useContext(Context)
//be able to add to home or current chore list 
    return(
        <div>
            <h2>Favorite Tasks</h2>
                
        </div>
    )
}