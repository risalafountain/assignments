const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')

//will need to be remade with each pull (part 2 or 3)
// process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  'mongodb+srv://mrsrisalafountain:D3INAzzICrV0AMgF@cluster0.dhmkqhk.mongodb.net/',
  () => console.log('Connected to the DB')
)

app.use('/auth', require('./routes/authRouter.js'))
//gatekeeper listens for specific endpoint and protects anything after the api endpoint
//req.user is the payload
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/todo', require('./routes/todoRouter.js'))

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === 'UnauthorizedError'){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})