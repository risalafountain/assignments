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

catsRouter.post ("/cats", (req,res, next) => {
    const newCat = (req.body)
    //add id to newCat
    newCat._id = uuidv4()
    cats.push(newCat)
    res.send('successfully added a new cat to the database')
})

catsRouter.get("/cats", (req, res, next) => {
    console.log("the get request was sent")
    res.send(cats)
})



module.exports = catsRouter