const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

//Signup

authRouter.post('/signup', (req, res, next) => {
    //check to see if user exists --put it all to lowercase
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        //if user exists don't let them sign up 
        if (user) {
            res.status(403)
            return next(new Error('That username is already taken'))
        }

        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            //needs payload and secret
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ token, user: savedUser.withoutPassword() })
        })
    })
})

//login
authRouter.post('/login', (req, res, next) => {
    //if user exists, then check the password 

    User.findOne({ username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        //if they are NOT a user
        if (!user) {
            res.status(403)
            return next(new Error('Username or Password are incorrect'))
        }

        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(403)
                return next(new Error('Username or Password are incorrect'))
            }
            if (!isMatch) {
                res.status(403)
                return next(new Error('Username or Password are incorrect'))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({token, user: user.withoutPassword()})
        })
    })
})


module.exports = authRouter


//old code removed since we are using logic passed into userSchema
        // //if pw does NOT match user [   
        // if(req.body.password !== user.password) {
        //     res.status(403)
        //     return next(new Error('Username or Password are incorrect'))
        // }
