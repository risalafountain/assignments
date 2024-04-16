import React, { useEffect, useState } from "react";
import axios from "axios";

const Context = CreateContext()

function ContextProvider(props) {
    //empty array to store data 
    const [task, setTask] = useState({
        title: "",
        imageUrl: "",
        isFavorite: false,
    })

    const [faveTasks, setFaveTasks] = useState([])
    
    //useEffect gets the data from the api and sets the data to the cards received
    //empty dependency ensures it only runs once 
    useEffect(() => {
        axios.get('')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])
 
    //add new tasks to the faveTasks arr
    
    return(
    //allow the children to have access to the values 
        <ContextProvider>
            {props.children}
        </ContextProvider>
    )
}



