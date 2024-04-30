const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()
const {expressjwt} = require('express-jwt')
require('dotenv').config()

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect(
    'mongodb+srv://mrsrisalafountain:D3INAzzICrV0AMgF@cluster0.dhmkqhk.mongodb.net/',
      (err) => console.log('connected to the database', err)
)

//ROUTE HANDLERS
//authentication 
app.use('/api/auth', require('./routes/authRouter.js'))

//AUTH MIDDLEWARE
//express-jwt listens for spec endpoint and protects anything after the api endpoint
app.use('/api/main', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))

//issue (do i need api in front of this?)
app.use('/api/main/issue', require('./routes/issueRouter.js'))


//ERR HANDLER
app.use((err, req, res, next) => {
console.log(err)
if(err.name === 'UnauthorizedError'){
    res.status(err.status)
}
return res.send({errMssg: err.message})
})


app.listen(9000, ()=>{
    console.log('server is running on port 9000')
})