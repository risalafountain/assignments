//First Express Server
//since it is in node modules just use express
const express = require("express")
const app = express()
const morgan = require("morgan")
//const {v4: uuidv4} = require('uuid') no longer needed after transfer

//Middleware (for every request)
app.use(express.json())
app.use(morgan('dev'))

//use movieRouter for data 
//when you get a request for "/movies" or "/tvshows", use my file
app.use("/movies", require("./routes/movieRouter") )

app.use("/tvshows", require("./routes/tvShowRouter") )

//Server Listen
//listen needs 2 arguments (port, Callback function)
app.listen(9000, () => console.log("Server is running on Port 9000"))

//337.75
//argument 1: endpont (mount path)
//argument 2: Callback function (request, response)
// app.get("/", (req, res) => {
// res.send("Hello World!")
 //res.send({name: "Joe", age: 20})
    // })
    
    //Fake Data
    // const users = [
        //     {name: "John", age: 20},
        //     {name: "Jacob", age: 20},
        //     {name: "Jingle", age: 20},
        //     {name: "Heimer", age: 20},
        //     {name: "Schmidt", age: 20},
        //     {name: "Bob", age: 20}
        // ]
// //add a new movie
// app.post("/movies", (req, res) =>{
    // console.log(req) //send from postman check that it's sent in the body
//    normally it would look like this but since we're learning use the other option
  // movies.push(req.body)
 //     const newMovie = (req.body)
            //     movies.push(newMovie)
 //     res.send(`Successfully added ${newMovie.title} to the database`)
 // })
 //check in postman. caveat: server resets when we make changes because we are using fake data (mongoDB will help make the post request permanent)
