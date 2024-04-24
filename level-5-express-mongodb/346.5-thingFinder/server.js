const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

//middleware for every request 
app.use(express.json())

//fake data 
const foods = [
    {
        name: "taco",
        type: "main",
        _id: uuidv4()
    }, {
        name: "cake",
        type: "dessert",
        _id: uuidv4()
    }, {
        name: "lasagna",
        type: "main",
        _id: uuidv4()
    }, {
        name: "flautas",
        type: "appetizer",
        _id: uuidv4()
    }, {
        name: "mozzarella sticks",
        type: "appetizer",
        _id: uuidv4()
    }, {
        name: "creme brulee",
        type: "dessert",
        _id: uuidv4()
    }
]

//route
//get all 
app.get("/foods", (req, res) => {
    res.send(foods)
})

//query 
app.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredFoods = foods.filter(food => food.type  === type)
    console.log(filteredFoods)
    res.send(filteredFoods)
})
//in postman 
//localhost:9000/search/type?type=main
//WHY DONT I NEED THE FOODS endpoint? it wouldn't work with it... 
//server listen 
app.listen(9000, () => console.log("Server is running on port 9000"))