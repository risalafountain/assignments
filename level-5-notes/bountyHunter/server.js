const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')
// In order to help you in your quest, and since you are a do-it-yourself kind of bounty hunter, you have learned programming so you can keep track of your bounties and kills!

//Middleware (for every request)
app.use(express.json())

//FakeData
const bounties = [
    {
        firstName: "George",
        lastName: "McGourge",
        living: true,
        bountyAmount: 50,
        type: "Jedi",
        _id: uuidv4()
    },{
        firstName: "Ani",
        lastName: "McStabby",
        living: true,
        bountyAmount: 150,
        type: "Jedi",
        _id: uuidv4()
    },{
        firstName: "Arizona",
        lastName: "Sweet Teak",
        living: true,
        bountyAmount: 5,
        type: "Sith",
        _id: uuidv4()
    },{
        firstName: "Hands",
        lastName: "Bluebox",
        living: true,
        bountyAmount: 50,
        type: "Sith",
        _id: uuidv4()
    },{
        firstName: "Austin",
        lastName: "Danger-Powers",
        living: true,
        bountyAmount: 550,
        type: "Jedi",
        _id: uuidv4()
    }
]
//Routes
app.get("/bounty", (req, res) => {
    res.send(bounties)
}) 

app.post("/bounty", (req, res) => {
    const newBounty = (req.body)
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Succesfully added ${newBounty.firstName} ${newBounty.lastName} to the database`)
})



//server listen
app.listen(9000, () => console.log("Server is running on Port 9000"))