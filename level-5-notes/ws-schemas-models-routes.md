# What is a schema? (mongoose)
- a blueprint for defining the structure of documents in a mongoDB collection
- defines the shape of the documents, including the fields, their data types, and any validation rules 
- provide structure and consistency to the data stored in the database

# What is a Model? (mongoose)
- a model in mongoose is a constructor function that represents a MongoDB collection and provides an interface for interacting with it 
- models are created based on schemas. They are responsible for performing CRUD(create, read, update, delete) operations on the MongoDB collection
- models encapsulate the logic for dabase operations, including querying, updating, deleting, and validating documents

easiest way to see it you can create a schema but if you don't export a model at the end there's no CRUD operations that you can do 

schema enforces the data type exporting model gives you access to the operations

# the relationship between a schema and a model 

- when you create a model in Mongoose, you pass a schema to the mongoose.model() method. This associates the schema with the model. 
- model uses the schema to understand the structure of the documents in the MongoDB collection it represents. It also utilizes the schema's validation rules when performing operations on the data.
- the schema defines the structure and validationrules for documents, while the model provides the functionality to interact with the MongoDB collection based on that schema. 

# What is a route? (express)
- routes are used to define how the application responds to client requests to specific endpoints (urls)
- express routes are responsible for handling http requests (get, post, put, delete) and returning appropiate responses 
- routes are defined using http methods and url patterns, and each route typically corresponds to a specific functionality or resource in the application

# How it all comes together 
* Route -> Model
    - to perform data operations within a route handler, you often use MOngoose models. 
    - for example, if you're building a user management system, you might have a User model that represents the users in your application 
    - inside a route handler, you would use methods provided by the User model (e.g. find, create, udpate, deleteOne) to interact with the users collection in MongoDB

* The Schemas Role 
    - express routes don't directly interact with schemas, but they indirectly use them through the associated models
    - the schema ensures that the data being manipulated within route handlers conforms ot the expected structure and validation rules

# Key Takeaways
- express routes define the endpoints and functionality of our application 
- mongoos models provide an interface for interacting with MongoDB collections based on defined schemas 
- schemas define the structure and validation rules for our data, ensuring consistency an integrity 

build a server js file and install everything you need (using server setup also on workshop page)

--coding project for this video e-commerce 
# building our schema 
* make a models folder 
* make an inventory.js file 
    const mongoose = require('mongoose')
    const Schema = mongoose.Schema

    const inventorySchema = new Schema({
        product: {
            type: String,
            required: true 
        },
        category: {
            type: String, 
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    })

    model.exports=mongoose.model('Inventory', inventorySchema)

# routes
* create a routes folder
* create inventoryRouter.js

const express = require('express')
const inventoryRouter= express.Router()
const Inventory = require('../models/inventory')

* build a route where we can add new inventory then test in postman

inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new.Inventory(req.body)
    newInventory.save((err, savedInventory)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

* in server.js add middleware after connect
app.use("/inventory", require('./routes.inventoryRouter'))

* test post request in postman 

* CREATE GET REQUEST IN inventoryRouter

inventoryRouter.get("/", (req, res, next) => {
    Inventory.find(err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    }
})
* test get request in postman 

* FIND BY ID AND DELETE 
inventoryRouter.delete("/:id", (req, res, next) => {
    Inventory.findByIdAndDelete(req.params.id, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
    })
    return res.status(200).send(`Deleted Item: ${deletedItem.product}`)
    }
})
* test delete request in postman

* FIND ONE AND UPDATE 
inventoryRouter.put('/:id', (req, res, next) =>{
    Inventory.findOneAndUpdate({_id: req.params.id}, 
    req.body,
    {new: true}) //by default, a findOneAndUpdate will return the original document. new true will return the new updated document
    (err, updatedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedItem)
    }
})
* test put request in postman

* Query request

inventoryRouter.get('/category', (req, res, next) =>{
    Inventory.find({category: req.query.category}, (err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})
* test get/query request in postman 
    GET localhost:8000/inventory/category?category[this is the key]=Clothing[this is the value]

