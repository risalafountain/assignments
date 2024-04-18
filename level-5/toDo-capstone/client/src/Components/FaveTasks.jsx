import React, { useContext, useEffect } from 'react';
import { Context } from '../Context/ContextProvider';
import FaveCard from './FaveCard';

export default function FaveTasks(props){
    const {faveTasks} = useContext(Context)

    useEffect(() => {
        //this component doesn't mount until AFTER i press the favorite tasks link on the page is this ok?
        console.log('faveTask is mounted')
        console.log(faveTasks)
    },[])

    return (
        <div>
            <h1>favorites here</h1>
            {/* map over fave tasks arr and render a favecard */}
            {faveTasks.map(task => {
                return (
                    <FaveCard
                    key = {task._id}
                    {...task}
                    />
                    )
            })}
        </div>
    )
}

