const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue.js')


//get all issues
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//get issues by userId
issueRouter.get('/user', (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//add new issue
//err _id undefined at api/issue
//err 
issueRouter.post('/', (req, res, next) => {
    //once user is setup use this
    req.body.user = req.auth._id
    console.log(req.body.user)
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        console.log(savedIssue)
        res.status(201).send(savedIssue)
    })
})

//delete issue
issueRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete(
        { id: req.params.issueId },
        (err, deletedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Succesfully deleted issue: ${deletedIssue.title}`)
        }
    )
})

//update issue
issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

module.exports = issueRouter