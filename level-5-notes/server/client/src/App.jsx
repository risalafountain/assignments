import React, { useState, useEffect } from "react";
import axios from 'axios'
import Movie from "./components/Movie"
import AddMovieForm from "./components/AddMovieForm";

export default function App() {
    //setup state 
    const [movies, setMovies] = useState([])

    //make request reusable--remove hardcoding from useEffect and move to its own function 
    //GET ALL 
    function getMovies() {
        axios.get("/movies")
            // .then(res => console.log(res)) //test 
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }

    //Create New Movie
    function addMovie(newMovie) {
        axios.post("/movies", newMovie)
        // .then(res => console.log(res))
        .then(res => {
            setMovies(prevMovies => [...prevMovies, res.data])
        })
        .catch(err => console.log(err))
    }


    //empty dependencies arr = runs once
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div className="movie-container">
            <AddMovieForm 
                addMovie ={addMovie}
            />
            {movies.map(movie => <Movie {...movie} key={movie.title} />)}
        </div>
    )
}

