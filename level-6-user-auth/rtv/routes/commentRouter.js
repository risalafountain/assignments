const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment')
const { rawListeners } = require('../models/issue')

//get comment request
commentRouter.get('/', (req, res, next) => {
    Commment.find((err, comment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})


//add new comment 
commentRouter.post('/:issueId', (req, res, next) => {
    //coming from comment model = //coming from auth token 
    req.body.user = req.auth._id
    req.body.issue = req.params.issueId
    req.body.username = req.auth.username

    const newComment = new Comment(req.body)
    newComment.save((err, comment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(201).send.apply(comment)
    })
})


module.exports = commentRouter