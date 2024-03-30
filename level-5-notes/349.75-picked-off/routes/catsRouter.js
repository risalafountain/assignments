const express = require('express')
const catsRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//fakedata
const cats = [
    {
    breed: "devon rex",
    coat: "curly",
    grooming: 1,
    _id: uuidv4(),
},{
    breed: "maine coon",
    coat: 'double',
    grooming: 4,
    _id: uuidv4(),
}, {
    breed: 'ragdoll',
    coat: 'long',
    grooming: 8,
    _id: uuidv4(),
},{
    breed: "siamese",
    coat: "short",
    grooming: 3,
    _id: uuidv4(),
}
]

catsRouter.use((req, res, next) => {
    console.log("The cats  middleware was executed")
    next()
})

catsRouter.get("/cats", (req, res, next) => {
    console.log("the get request was sent")
    res.send(cats)
})

module.exports = catsRouter