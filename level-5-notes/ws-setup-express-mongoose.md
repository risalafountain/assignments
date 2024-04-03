# Express
* Routing 
    routing is the process of mapping http request to specific endpoints

* Middleware 
    Middleware is a software layer that sits between the client and server in a web application 

# Restaurant Analogy 

# Express plays the role of the waitstaff 
    takes orders from the customers (react app)
    communicates them to the kitchen (MongoDB) and chefs (Mongoose)
    provides a bridge between the customers and the kitchen, ensuring that orders are accurately conveyed and dishes are served promptly

# Mongoose
    Schema/Models
        provide a structured way to define the blueprint for data stored in MongoDB
    Queries [.find, .send]
        provide a flexible and intuitive way to interacts with MongoDB, allowing developers to retrieve, update, delete, and save data

# Mongoose is the chef 
    responsible for handling all the ingredients (data) stored in MongoDB
    chefs follow recipes (schemas) to create and modify dishes (documents) based on the orders received from the waitstaff(express.js) 

# MongoDB is the kitchen
    all the ingredients(data) are stored and managed
    just like a kitchen organizes ingredients into various dishes, MongoDB organizes data into collections and documents

# MERN Stack
             Node
    MongoDB  Express  React APP

# Mongo DB
SETUP 
    create server.js
    npm init -y 
    make sure package.json main is server.js
    npm install mongoose express morgan 

variables
    const express = require('express')
    const mongoose = require('mongoose')
    const morgan = require ('morgan')
    const app = express()

middleware
    app.use(express.json)
    app.use(morgan('dev'))

* since the videos show older versions of morgan then go into package.json and change the version to '6.12.0'
npm install to reinstall mongoose at that version

setup mongoose connection 
    mongoose.connect('mongodb+srv://mrsrisalafountain:D3INAzzICrV0AMgF@cluster0.dhmkqhk.mongodb.net/', () => {
        console.log('connected to the database', err)
    })

* set up error handler in every server js 
    app.use((err, req, res, next) => {
        console.log(err)
        return res.send({err sg: err.message})
    })

* app.listen
app.listen(8000, () => {
    console.log('server is running on port 8000'))
}

MONGO DB info do not lose
mongodb+srv://mrsrisalafountain:D3INAzzICrV0AMgF@cluster0.dhmkqhk.mongodb.net/

to get rid of deprecation warning add this below middleware
mongoose.set('strictQuery', true)

make sure to use nodemon so the server will reset 