const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


//Fake Data
const movies = [
    { title: "star wars", genre: "action", _id: uuidv4() },
    { title: "dune", genre: "sci-fi", _id: uuidv4() },
    { title: "the fault in our stars", genre: "romance", _id: uuidv4() },
    { title: "50 first dates", genre: "comedy", _id: uuidv4() },
    { title: "taken", genre: "action", _id: uuidv4() }
]

//same route 
movieRouter.route("/")
//GET all   
.get((req, res) => {
    res.send(movies)
})

//POST one 
.post((req, res) => {
    const newMovie = (req.body)
    //add id to newMovie
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database`)
})

//GET one
movieRouter.get("/:movieId", (req, res) =>{ 
    const movieId = req.params.movieId
    const foundMovie= movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

//get by genre can implement into basic endroute when appropriate (not in this example)

movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})
//in postman 
// localhost:9000/movies/search/genre?genre=comedy
module.exports = movieRouter