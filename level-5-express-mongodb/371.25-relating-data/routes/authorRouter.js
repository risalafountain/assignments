const express = require('express')
const authorRouter = express.Router()
const Author = require('../models/author')

//get all authors
authorRouter.get('/', (req, res, next) => {
    Author.find((err, authors) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    })
})

//get authors by search terms 
authorRouter.get('/search', (req, res, next) => {
    const {author} = req.query
    const pattern = new RegExp(author) 
    Author.find({name: {$regex: pattern, $options: 'i'} }, 
    (err, author) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(author)
    })
})
//test in postman localhost:9000/authors/search?author=c <= or whatever letters you want


//add one author 
authorRouter.post('/', (req, res, next) => {
    const newAuthor = new Author(req.body)
    newAuthor.save((err, savedAuthor) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedAuthor)
    })
})



module.exports = authorRouter