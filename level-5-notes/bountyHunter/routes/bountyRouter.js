const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')


//get all 
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//get one bounty 
bountyRouter.get('/:id', (req, res, next) =>{
    Bounty.findById(req.params.id,
    (err, bounty) => {
       if(err) {
           res.status(500)
           return next(err)
    }
        return res.status(200).send(bounty)
    })
})

//create a new bounty
bountyRouter.post("/", (req, res, next)=> {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if (err) {
            res.status(500)
            return next (err)
        }
        return res.status(201).send(savedBounty)
    })
})

//delete one bounty 
bountyRouter.delete('/:id', (req, res, next) => {
    Bounty.findByIdAndDelete(req.params.id, (err, deletedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(200).send(deletedBounty)
    })
})

//update one 
bountyRouter.put('/:id', (req, res, next) => {
    Bounty.findOneAndUpdate({_id: req.params.id}, 
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        })
})

module.exports = bountyRouter

//Routes
//get all
// bountyRouter.get("/", (req, res) => {
//     res.send(bounties)
// }) 
//getOne
// bountyRouter.get("/:bountyId", (req,res) => {
//     const bountyId = req.params.bountyId
//     const foundBounty=bounties.find(bounty => bounty._id === bountyId)
//     res.send( foundBounty)
// })

//new-post 
// bountyRouter.post("/", (req, res) => {
//     const newBounty = (req.body)
//     newBounty._id = uuidv4()
//     bounties.push(newBounty)
//     res.send(`Succesfully added ${newBounty.firstName} ${newBounty.lastName} to the database`)
// })

//delete
// bountyRouter.delete("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     //splice to edit existing arr-need index
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     bounties.splice(bountyIndex, 1)
//     //how can i add the first and last name using template literals? when i tried, it returned undefined
//     res.send('Successfully deleted bounty  from the database!')
// })

//update-put
// bountyRouter.put("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const updateBounty = req.body

//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)

//     //object.assign takes 2 and merges to 1 (1:original object 2: new object to merge in)
//     const updatedBounty = Object.assign(bounties[bountyIndex], updateBounty)
//     res.send(updatedBounty)
// })
