# What is One to Many?
Relationship in which a single entity from one side is associated with multiple entities on the other side. 

Ex: 
Library= books loaned to borrowers. 
Books(one): the library holds a collection of books. Each book has its own unique identity, with specific information like title, author, genre. 

Borrowers(many): multiple borrowers who visit the library. each borrower can checkout multiple books

# What is many to many?
Relationship where entities on both sides can have multiple associations with each other. This means that each entity on one side can be related to multiple entities on the other side, and vice versa 

Ex: 
Students enrolling in courses 
- One Student, Many Courses: Each student can enroll in multiple coureses, forming a one-to-many raltionship from the perspective of the student 
- One Course, Many Students: Each course can have multiple students enrolled, creating a one to many relationship from teh perspective of the course. 

# What we're working with: 
Issues and Comments: 
- One to Many relationship: Each issue can have multiple comments, but each comment is associated with only one issue. 

# Users and Comments: 
Many to One Relationship: Many users can make comments, but each comment is made by only one user. 

# Comment Model: 
We need References! 
- each comment is made by a user. 
- each comment is made on an issue. 

const commentSchema = new Schema({
    text: {
        type: String, 
        required: true
    },{
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue"
    }
    }

# Handling Multiple references in our Route 
- We set both references in the req.body so that when we call our 'newComment()' it is added to our Model. 

//add new comment 
commentRouter.post('/:id', (req, res, next) => {
    req.body.issue = req.params.id
    req.body.user = req.auth._id
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedComment)
    })
})


# Get all Comments vs Get Comments by Issue Id: 

* Get All Comments Request: 
- Retrieves all comments stored in the database. 
- Useful for displaying all comments across multiple issues. 
- Minimizes the number of requests, reducing latency. 

* Get Commonets by Issue ID Request: 
- Retrieves comments specifically associated with a given issue ID
- Targeted approach to fetching comments related to a particular issue. 
- Useful for displaying comments within the context of a specific issue or thread. 

# Handling Comments on the Front End 

* FrontEnd Filtering with .filter Method: 
- utilize the .filter method in JS to dynamically sort and display comments received from the backend. 

* Efficient Resource Utilization 
- Reduce server load and network traffic by fetching all comments in a single "Get All Comments" request 

models>user
   const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userSince: {
        type: Date,
        default: Date.now
    },
    isAdmin:{
        type: Boolean, 
        default: false
    }
})

models>issue
onst issueSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
    },
    //one to many 
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    username:{
        type: String,
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    likedUsers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    dislikedUsers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

Create/update comment Model/Schema
const commentSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    //many to many
    user:{
        //need access to the user id 
        type: Schema.Types.ObjectId,
        //need access to the user model 
        ref: "User",
        required: true
    },
    //one to many
    issue:{
        //need to access specific issue id 
        type: Schema.Types.ObjectId,
        //need access to issue model 
        ref: "Issue",
        required: true
    },
    //to view which user made the comment
    username:{
        type: String,
        required: true
    }
})
 

Create a comment Router and set up as follows 

const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment')

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

TEST IN POSTMAN 
- verify server file routes includes this 
    app.use('/api/main/comments', require('./routes/commentRouter'))

POST req to > /api/auth/login  
grab token, click on authorization select bearer token and paste in there 

GET req to > /api/main/comments
send and should have an empty arr since we haven't had any comments added to it yet 

//add new comment 
commentRouter.post('/:issueId', (req, res, next) => {
    //coming from comment model = //coming from auth token 
    req.body.user = req.auth._id
    req.body.issue = req.params.issueId
    //req.auth object allows us to access token
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

test in postman 
GET req > /api/main/issue
grab id of issue

POST req >/api/main/comments/<paste id> 
change body
{"title" : "some title"}
shows unique id username and user
Get req > /api/main/comments to see that that user no longer has an empty arr 

FRONTEND STUFF--add functionality to the comments
open new terminal cd into client npm run dev

in userProvider>     const [allComments, setAllComments] = useState([])

write a function that getAllComments. 
    function getAllComments(){
        userAxios.get('/api/main/comments')
        .then(res => setAllComments(res.data))
        .catch(err => console.log(err))
    }    

Pass out of our context into values getAllComments function and allcomments Arr (verify that getUserIssues, getAllIssues, and allIssues are also passed out as values)

need to call this function in two places 
profile and public components 
components>Profile> 
we already have a useEffect that is getUserIssues() add getAllComments()
make sure it is passsed into context above 
  const {
    user: {username}, 
    issues,
    getUserIssues, 
    getAllComments
  } = useContext(UserContext)

  useEffect(() => {
    getUserIssues()
    getAllComments()//these are attached to our issues 
  }, [])

components> Public >
const {
    getAllIssues, 
    allIssues, 
    getAllComments
  } = useContext(UserProvider)
  
  useEffect(()=> {
    getAllIssues()
    getAllComments()
  }, [])

PROP DRILLING
issue.jsx >
      <CommentContainer issueId={_id} />

CommentContainer >
pass in props and the issueId
    const {issueId} = props
    {!isHidden && <CommentList issueId ={issueId}/>}

CommentList >
once you see all comments in console, you need to filter out all comments to return the comment.issue (from comment model) that matches the issue id 

import { useContext } from "react"
import UserProvider from "../context/UserProvider"

export default function CommentList(props){
    const {issueId} = props
    const {allComments} = useContext(UserProvider)
    const filteredComments = allComments.filter(comment => comment.issue ===issueId)

    //if you click on show comments it should show up in the console
    console.log(allComments)
    console.log(filteredComments)
    return (
        <div>

        </div>
    )
}

setup the Comment Form >

import React, { useState } from 'react';

export default function CommentForm() {
    const [formData, setFormData] = useState({
        title: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        setFormData({title: ''})
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input 
            placeholder='Comment'
            name = 'title'
            value={formData.text}
            onChange = {handleChange}
        />
        <button>Leave Comment</button>
        </form>
    )
}

as of right now this is only console logging the formData, we want to create the function to add a comment 

UserProvider> 

create parameters id, comment so we can know which id we are commenting to
function addComment(id, comment){
    userAxios.post(`/api/main/comments/${id}`, comment)
    .then(res => setAllComments(prevAllcomments => {
        return [
            ...prevAllComments,
            res.data
        ]
    }) )
    .catch(err => console.log(err))
}

pass the function out cto values below addComment

CommentForm>

const {addComment} = useContext(UserProvider)
<make sure it imports all this at top >

go down to the console.log in handle submit and call in the parameters
addComment(<where are we getting the id from??>, formData)

CommentContainer>
add value to commentForm instance
 <CommentForm issueId ={issueId} />

CommentForm > 
pass in props and destructure 
const {issueId} = props

now you can go to addComment and pass the issueId and formData
addComment(issueId, formData)

TEST ON FRONT END 
add comment on existing 


where is hide/show comments button ?



