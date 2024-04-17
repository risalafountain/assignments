import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const Context = createContext()

export default function ContextProvider(props) {
    //empty array to store data 
    const [allTasks, setAllTasks] = useState([])
    const [faveTasks, setFaveTasks] = useState([])


    //useEffect gets the data from the api and sets the data to the cards received
    //empty dependency ensures it only runs once 
    useEffect(() => {
        axios.get('/tasks')
            .then(res => setAllTasks(res.data))
            .catch(err => console.log(err))
    }, [])

    //add new tasks to the faveTasks arr
    function newTask(task) {
        axios.post('/tasks', task)
            .then(res => setAllTasks(prev => [...prev, res.data]))
            .catch(err => console.log(err))
    }

    //edit task 
    function editTask(id, update) {
        axios.put(`/tasks/${id}`, update)
            .then(res => setAllTasks(prev => prev.map(task => task._id === id ? res.data : task)))
            .catch(err => console.log(err))
    }

    //update task as fave and push to faveTask arr 

    //delete task
    function deleteTask(id) {
        axios.delete(`/tasks/${id}`)
            //filter out deleted id and setAllTasks
            .then(res => setAllTasks(tasks => tasks.filter(task => task._id !== id)))
            .catch(err => console.log(err))
    }

    return (
        //allow the children to have access to the values 
        <Context.Provider value={{ allTasks, newTask, deleteTask, editTask }}>
            {props.children}
        </Context.Provider>
    )
}





