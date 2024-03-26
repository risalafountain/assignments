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


movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })
    .post((req, res) => {
        const newMovie = (req.body)
        //add id to newMovie
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(`Successfully added ${newMovie.title} to the database`)
    })

module.exports = movieRouter