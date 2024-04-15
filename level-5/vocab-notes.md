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

# URL Parameters 

# Parts of a URL 
    *Base 
    *Endpoint
    *Parameter 
    *Query 

# Parameters (req.params) - GET one 

# URL Queries 

# Query String-typically to filter results
* begins with ?
* Built of key=value pairs
* multiple queries separated with & 

# Middleware 

# What is it? 
* app.use allows us to use that logic on any type of CRUD requests
    * app.use()needs two parameters 
    1. optional - Mount Path/endpoint  if left out it fires on every request
    2. Callback Function - receives the request, response objects, also the 'next' function 

# The 'next' function 
    * moves on to the middleware in line on our server 

    (req, res, next)

    app.use("/items", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED)
    next()
        })
    
    app.get("/items", (req, res, next) => {console.log ("get request received")
    res.send("Hello world")
    })

* Every single piece of middleware needs to either call next or res.send something to end the process. 

# Console Errors in Express

# use a logger 
* npm install morgan
//per project installation--do not install it globally 
import it into your project 
    const morgan = require ('morgan')
add it to the middleware
    app.use(morgan('dev)) //logs requests to the console 

# Connecting the Front End to the Back end 

* Folder Structure    
    client (all frontend goes here )
    cd into client and run "npx create-react-app ."
* Proxy
add to the bottom of the package.json file after last entry before closing }
      },
  "proxy": "http://localhost:9000"
in index file, can just use endpoint from your own server without full url when making requests
    axios.get("/movies") 

to request from a 3rd party api, you would need the whole url 

    axios.get("http://rickandmortyapi.com")

will need 2 windows open for front end (npm start) and back end (nodemon)

Status 200 when asking the database for something (get delete)
status 201 when adding something to the database (put post)








