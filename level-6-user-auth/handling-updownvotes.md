# **Creating a Like and Dislike Functionality for your RTV**

In this write-up, we will walk through how the provided code creates a like and dislike functionality for issues in a MERN (MongoDB, Express, React, Node.js) application. This is especially helpful for students who are new to full-stack development and want to understand how to implement such features.

## Workshop on handling upvotes/downvotes

[One to Many/Comments/RTV](https://www.notion.so/One-to-Many-Comments-RTV-4db2c125b89c4960a604375c98de61b7?pvs=21) 

## **1. Setting up the MongoDB Schema**

First, the code defines a schema for the "issue" using Mongoose. The "issueSchema" includes fields such as "title," "description," "datePosted," "user," "likedUsers," and "dislikedUsers." These fields are self-explanatory: "title" and "description" contain the issue details, "datePosted" tracks the creation date, "user" is a reference to the user who created the issue, and "likedUsers" and "dislikedUsers" store the users who have liked or disliked the issue.

```jsx
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikedUsers:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model("Issue", issueSchema)

```

## **2. Implementing the Back-End Routes**

The next step is to implement the back-end routes to handle liking and disliking an issue. In the code, two routes are defined: `/upVote/:issueId` and `/downVote/:issueId`. These routes are accessed through HTTP PUT requests, and they take the issue's ID as a parameter. In these routes, we use Mongoose `$addToSet` and `$pull` operations to update the "likedUsers" and "dislikedUsers" arrays efficiently.

- **`/upVote/:issueId` Route**: This route is used to upvote (like) an issue. It updates the issue by adding the authenticated user's ID to the "likedUsers" array using `$addToSet`. This operation ensures that the user's ID is only added if it's not already present in the array. It also removes the user's ID from the "dislikedUsers" array using `$pull`, if necessary. The updated issue is then returned.

```jsx
postRouter.put('/upVote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        {
            $addToSet: { likedUsers: req.auth._id },
            $pull: { dislikedUsers: req.auth._id }
        },
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

```

- **`/downVote/:issueId` Route**: This route is used to downvote (dislike) an issue. It works similarly to the upvote route, but it updates the "dislikedUsers" array by adding the authenticated user's ID using `$addToSet`, and it removes the user's ID from the "likedUsers" array using `$pull`. Again, the updated issue is returned.

```jsx
postRouter.put('/downVote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        {
            $addToSet: { dislikedUsers: req.auth._id },
            $pull: { likedUsers: req.auth._id }
        },
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

```

## **3. Calling the Back-End Routes from the Front End**

To trigger these routes from the front end, two functions, `upVoteIssue(issueId)` and `downVoteIssue(issueId)`, are defined. These functions use Axios to make HTTP PUT requests to the corresponding back-end routes, passing the issue's ID as a parameter.

- `upVoteIssue(issueId)` sends a request to `/upVote/:issueId` to upvote the issue.
- `downVoteIssue(issueId)` sends a request to `/downVote/:issueId` to downvote the issue.

Once the request is successful, the front end updates the state to reflect the change in the liked or disliked status of the issue.

```jsx
function upVoteIssue(issueId) {
    userAxios.put(`/main/issues/upVote/${issueId}`)
        .then(res => {
            setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ? issue : res.data))
            setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data) }))
        })
        .catch(err => console.log(err))
}

function downVoteIssue(issueId) {
    userAxios.put(`/main/issues/downVote/${issueId}`)
        .then(res => {
            setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ?  issue : res.data))
            setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data) }))
        })
        .catch(err => console.log(err))
}

```

## **4. Updating the User Interface**

The code assumes that you have a user interface that displays issues. When a user interacts with the "like" and "dislike" buttons for an issue, these functions are called to update the issue's status, and the UI is updated accordingly.

In the provided code, the updated issue data is used to refresh the state and ensure that the user interface reflects the current liked and disliked status of the issue.

Overall, this structure provides a clear and comprehensive explanation of how the back-end routes, in conjunction with the `$addToSet` and `$pull` operations, enable the like and dislike functionality for issues in a MERN application. It also highlights the importance of efficiently managing arrays within MongoDB documents and updating the user interface to provide a complete user experience