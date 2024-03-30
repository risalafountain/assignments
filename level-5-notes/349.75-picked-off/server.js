const express = require('express')
const catsRouter = require('./routes/catsRouter')
const app = express()

//middleware
app.use(express.json())

//make this endpoint / not /cats
app.use("/", require("./routes/catsRouter"))

//server listen 
app.listen(9000, () => console.log("Server is running on Port 9000"))
// - Write an Express server to handle a `GET` request that returns an object (of any kind) as a response.
// - Write a middleware function in a separate JavaScript file that accepts the `req`, `res`, and `next` parameters, adds a property to the `req`, and allows the server to continue on with it's normal operation.
// - Pull that module into your main server code and set it up as middleware.
// - Use Postman to make the `GET` request and test whether your middleware did its job.