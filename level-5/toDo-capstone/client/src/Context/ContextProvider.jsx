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
    function makeFavorite(taskId) {
        //find the favorited task
        const favoritedTask = allTasks.find(task => task._id === taskId)
        //update isFave and add task to the favetasks arr
        console.log('favorited task:', favoritedTask)
        axios.put(`/tasks/${taskId}`, { isFavorite: true })
            .then(res => {
                console.log('put req successful')

                setFaveTasks(prev => {
                    return ([...prev, favoritedTask])
                })

                console.log('fave tasks after update', favoritedTask)
            })
            .catch(err => console.log(err))
    }
    //delete faveTask
    function deleteFavorite(id) {
        axios.delete(`/tasks/${id}`)
            //filter out the deleted id and update faveTasks
            .then(res => setFaveTasks(tasks => tasks.filter(task => task._id !== id)))
            .catch(err => console.log(err))
    }
    //delete task
    function deleteTask(id) {
        axios.delete(`/tasks/${id}`)
            //filter out deleted id and setAllTasks
            .then(res => setAllTasks(tasks => tasks.filter(task => task._id !== id)))
            .catch(err => console.log(err))
    }
    //allows a card to move from favorites to 
    function copyToHome(task){
        //copy task and its props
        const copiedTask = {...task}
        //add to the allTasks arr
        setAllTasks(prev => [...prev, copiedTask])

        axios.post('/tasks', copiedTask)
        .then(res => res.data)
        .catch(err => console.log(err))
    }

    return (
        //allow the children to have access to the values 
        <Context.Provider value={{ allTasks, newTask, deleteTask, editTask, faveTasks, makeFavorite, deleteFavorite, copyToHome }}>
            {props.children}
        </Context.Provider>
    )
}





