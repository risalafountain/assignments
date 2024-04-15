const express = require('express') //1
const tvShowRouter = express.Router() //2
const {v4: uuidv4} = require('uuid') //3

//5 - Fake Data
const tvShows = [
    {title: "CSI", _id: uuidv4()},
    {title: "Kyle XY", _id: uuidv4()},
    {title: "Wheel of Time", _id: uuidv4()},
    {title: "Scandal", _id: uuidv4()},
    {title: "Rings of Power", _id: uuidv4()},
]

//two different options to do this
//Option #1
//6 Routes
//7 change mount paths
// tvShowRouter.get((req, res)=> {
//     res.send(tvShows)
// })

// tvShowRouter.post((req, res) => {
//     const newShow = (req.body)
//     newShow._id = uuidv4()
//     tvShows.push(newShow) 
//     res.send(`Succesfully added ${newShow.title} to the database`)
// })

//Option #2
//8 use this method and chain requests, paste from above 
tvShowRouter.route("/")

.get((req, res)=> {
    res.send(tvShows)
})

.post((req, res) => {
    const newShow = (req.body)
    newShow._id = uuidv4()
    tvShows.push(newShow) 
    res.send(`Succesfully added ${newShow.title} to the database`)
})

//params
tvShowRouter.get("/:tvshowID", (req, res) => {
    const tvshowID = req.params.tvshowID
    const foundShow = tvShows.find(show => show._id ===tvshowID)
    res.send(foundShow)
})


module.exports = tvShowRouter //4

//can test in postman