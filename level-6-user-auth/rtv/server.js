const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

app.use(express.json)
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://mrsrisalafountain:D3INAzzICrV0AMgF@cluster0.dhmkqhk.mongodb.net/',
    (err) => console.log('connected to the database', err)
)

app.use((err, req, res, next) => {
console.log(err)
return res.send({errMssg: err.message})
})


app.listen(9000, ()=>{
    console.log('server is running on port 9000')
})