# initialize a new node project
- npm init -y
- npm install express

# Vocabulary 

# Route
    * an event listener for http requests

# Endpoint
    * "/item"  or "/user"

# Port 
    * can type this in the browser-> localhost: 9000/
    
# Nodemon
 <npm install -g nodemon >
 -g  means to install globally on our computer only have to install this one time ever

# Middleware - a function that fires on the in between before the res

# Request Body req.body - check the incoming req and parse from json to js so we can handle it --express.json() 

-needs mount path and function <app.use("/", express.json())> but if you want it to fire on every request, get rid of the mount path <app.use(express.json())>

# uuid - only necessary while working with fake data creates ids
stop server and install the package 
-not global needs to be installed for each server 
- <npm install uuid>

# Express Router - enables us to modularize
-create a new folder called routes
-create file named movieRouter
* in file 
* create variables 
-const express = require ('express)
-const movieRouter = express.Router()
-const {v4: uuidv4} = require('uuid')
* export 
-at bottom module.exports = movieRouter
* transfer info and make changes 
-cut and paste fake data and routes into movieRouter
-remove "app" and replace with movieRouter
-remove mount path  "/movies" and replace with "/" since the "/movies" is called in server.js
-app.use("/movies", require("./routes/movieRouter")
-use this method since "/" is being used in the requests 
<movieRouter.route("/")> and chain on request beneath it like this:
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
