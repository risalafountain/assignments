1. npm init -y 
    npm install morgan

2. npm install express 

3. npm install uuid 

4. variables at top
    const express = require('express')
    const app = express()
    const {v4:uuidv4} = require('uuid')
    const morgan = require ('morgan') 

5.  @bottom is the server listen needs port, cb function
    app.listen(9000, () => console.log("Server is running on Port 9000"))

6. need middleware 
    app.use(express.json())
    app.use(morgan('dev')) * logs requests to the console 


7. create fake data 
    const fakedata = [{data here}]
            _id: uuidv4()

8. create routes 
   

9. run nodemon <filename.js>

# Requests
* get all
app.get('/todo', (req, res, next) => {
    res.send(todos)
})

* get one 
app.get("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId
    //console.log(todoId) //this finds the correct Id
    const foundTodo= todos.find(todo => todo._id === todoId)
    console.log("this is the requested todo: ", foundTodo)
    res.send(foundTodo)
})

* new one
app.post("/todo/:todoId", (req, res, next) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Succesfully added ${newTodo.name} to the database`)
})

* delete one
app.delete("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId
    //splice out existing arr-need index, del one 
    const todoIndex = todos.findIndex(todo => todo._id ===todoId)
    todos.splice(todoIndex, 1)
    res.send('succesfully deleted a todo from the database')
})

* update one
app.put("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId
    const updateTodo = req.body
    const todoIndex = todos.findIndex(todo => todo._id ===todoId) 
    const updatedTodo = Object.assign(todos[todoIndex], updateTodo)
    res.send(updatedTodo)
})
