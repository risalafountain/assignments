import React, { useContext, useState } from 'react';
import { Context } from '../Context/ContextProvider';


export default function AddTaskForm() {
    const { newTask } = useContext(Context)
    const [task, setTask] = useState({
        title: "",
        imageUrl: "",
    })

    function handleChange(e) {
        const { name, value } = e.target
        setTask(prevTask => {
            return {
                ...prevTask,
                [name]: value
            }
        })

    }
    function handleSubmit(e) {
        e.preventDefault()
        newTask(task)
        //reset the form
        setTask(prevTask => ({
            ...prevTask,
            title: '',
            imageUrl: '',
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='title'
                value={task.title}
                onChange={handleChange}
                placeholder='Title'
                className='inputs'
            />

            <input
                name='imageUrl'
                value={task.imageUrl}
                onChange={handleChange}
                placeholder='ImageURL'
                className='inputs'
            />
            <button>Save</button>
        </form>
    )
}