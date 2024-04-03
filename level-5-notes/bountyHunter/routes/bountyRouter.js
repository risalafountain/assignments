const express = require('express')
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


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
//get all
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
}) 

//getOne
//the only way i could get this to work is to add /bounty to this WHY? 
bountyRouter.get("/:bountyId", (req,res) => {
    const bountyId = req.params.bountyId
    const foundBounty=bounties.find(bounty => bounty._id === bountyId)
//this returns a blank in postman--null/undefined
    res.send( foundBounty)
})

//new-post 
bountyRouter.post("/", (req, res) => {
    const newBounty = (req.body)
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Succesfully added ${newBounty.firstName} ${newBounty.lastName} to the database`)
})

//delete
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    //splice to edit existing arr-need index
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    //how can i add the first and last name using template literals? when i tried, it returned undefined
    res.send('Successfully deleted bounty  from the database!')
})

//update-put
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateBounty = req.body

    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)

    //object.assign takes 2 and merges to 1 (1:original object 2: new object to merge in)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateBounty)
    res.send(updatedBounty)
})

