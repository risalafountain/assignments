const express = require("express")
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

//Middleware (for every request)
app.use(express.json())
app.use("/bounty", require("./routes/bountyRouter"))
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://mrsrisalafountain:D3INAzzICrV0AMgF@cluster0.dhmkqhk.mongodb.net/',
    (err) => console.log('connected to the database', err)
)
//middleware after connect
app.use("/bounty", require('./routes/bountyRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

 
//server listen
app.listen(9000, () => console.log("Server is running on Port 9000"))