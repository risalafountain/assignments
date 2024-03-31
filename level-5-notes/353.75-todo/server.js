const express = require('express')
const app = express()
const {v4:uuidv4} = require('uuid')

// middleware
app.use(express.json())

//fake data
const todos = [{
    name: "Dishes",
    description: "load/unload the dishwasher",
    imageUrl: "https://images.unsplash.com/photo-1579716035750-92c059fe9f21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlzaGVzfGVufDB8fDB8fHww",
    completed: false,
    _id : uuidv4()
},{
    name: "Laundry",
    description: "put away laundry",
    imageUrl: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D",
    completed: false,
    _id : uuidv4()
}, {
    name: "Vaccuum",
    description: "Release the Krakken",
    imageUrl: "https://plus.unsplash.com/premium_photo-1673644122444-dc6ca110b7c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFjY3V1bXxlbnwwfHwwfHx8MA%3D%3D",
    completed: false,
    _id : uuidv4()

}, {
    name: "Meal Prep",
    description: "prepare lunch and snacks for the week",
    imageUrl: "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVhbCUyMHByZXB8ZW58MHx8MHx8fDA%3D",
    completed: false,
    _id : uuidv4()

}, {
    name: "Bedding",
    description: "switch out the bedding",
    imageUrl: "https://plus.unsplash.com/premium_photo-1676968002954-d165313b5601?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8fDB8fHww",
    completed: false,
    _id : uuidv4()

}]

// Check the type of _id in todos array //string
// todos.forEach(todo => {
//     console.log(typeof todo._id);
// })

//routes
//get all - returns the entire list of todos,
app.get('/todo', (req, res, next) => {
    res.send(todos)
})

//get one - allows the user retrieve a single todo by its `_id`.
app.get("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId
    //console.log(todoId) //this finds the correct Id
    const foundTodo= todos.find(todo => todo._id === todoId)
    console.log("this is the requested todo: ", foundTodo)
    res.send(foundTodo)
})

//create new one- allows new todo items to be posted to the array - When posting a new todo, you must generate a unique id for that todo (consider using the `uuid` npm package),
app.post("/todo/:todoId", (req, res, next) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Succesfully added ${newTodo.name} to the database`)
})

//update one- allows the user to update a todo by its `_id`
app.put("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId
    const updateTodo = req.body
    const todoIndex = todos.findIndex(todo => todo._id ===todoId) 
    const updatedTodo = Object.assign(todos[todoIndex], updateTodo)
    res.send(updatedTodo)
})

//delete one - allows the user to delete a todo by its `_id`, and

app.delete("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId
    //splice out existing arr-need index, del one 
    const todoIndex = todos.findIndex(todo => todo._id ===todoId)
    todos.splice(todoIndex, 1)
    res.send('succesfully deleted a todo from the database')
})

//app.lisen
app.listen(9000, () => console.log ('server is running on port 9000'))

//TEST
//try to combine all the same endpoints under one (function? variable?) so that you can get rid of the redundancies 
//can you combine all the redundant syntax? like const todoIndex>>>make the variables global instead of local

