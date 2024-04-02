import React, { useState } from 'react';

export default function AddMovieForm(props) {
    //initial inputs   
    const initInputs = { title: "", genre: "" } //database handles id
    const [inputs, setInputs] = useState(initInputs)
    
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        //post request
        props.addMovie(inputs)
        //reset to initial inputs
        setInputs(initInputs)
    }
        
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"  
                name="title" 
                value={inputs.title} 
                onChange={handleChange} 
                placeholder="Title" />
            <input 
                type="text" 
                name="genre" 
                value={inputs.genre} 
                onChange={handleChange} 
                placeholder="Genre" />
            <button >Add Movie</button>
        </form>
    )
}

//to build a form we need state, handleChange, and handleSubmit