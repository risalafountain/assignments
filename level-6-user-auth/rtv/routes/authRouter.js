const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

//signup
authRouter.post('/signup', (req, res, next) => {
    //check if user exists
    User.findOne({username: req.body.username.toLowerCase()},
    (err, user)=> {
        if(err){
            res.status(500)
            return next(err)
        }
    //is user exists do not let them sign up 
    if(user) {
        res.status(403)
        return next (new Error('That username is already taken!'))
    }

    //create new user
    const newUser = new User(req.body)
    newUser.save((err, savedUser)=> {
        if (err) {
            res.status(500)
            return next(err)
        }
    //need payload and secret
    const token = jwt.sign(savedUser.toObject(),
    process.env.SECRET)
    return res.status(201).send({token, user: savedUser})
    })
    })
})
    //login 
    authRouter.post('/login', (req, res, next) => {
        //if user exists, check PW 
        User.findOne({username: req.body.username.toLowerCase()},
        (err, user)=> {
            if(err){
                return res.status(500)
                return next(err)
            }
        //if they are NOT a user
        if(!user){
            res.status(403)
            return next(new Error ('Username or Password are incorrect.'))
        }
        //if PW does NOT match user
        if(req.body.password !== user.password){
            res.status(403)
            return next(new Error("Username or Password are incorrect"))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        console.log('jwt token:', token)
        return res.status(200).send({token, user})
        })
    })



module.exports = authRouter