Mongo DB $Methods 
# Objectives
* Understand the purpose and benefits of the MongoDB Methods 
* Learn the common syntax for these methods and indentify resources 
* Implement these methods to handle upvotes and downvotes in an application (lvl 6 RTV)

# Benefits of Using MongoDB $Methods
* Provides powerful update operators that allow you to perform specific operations on documents in a collection 
* Update operators are essential tools for modifying documents in a collection
* They allow you to perform specific actions, making it possible to update fields, add elements to arrays, or perform other operations on docuemnts. 

- $set is used to set the value of a field in a document. It is handy when you need to update a specific field to a a new value 
- $unset is used to remove a field from a document. This is useful when you want to eliminate a specific field completely 
- $push operator adds an element to an array field. It's helpful when you need to append new elements to an existing array 
- $addToSet operator is used to add an element to an array only if it does not already exist. It is valuabel when you want to ensure uniqueness in an array. (votes?) 
- $pull removes elements from array that match a specified condition. It is handy for selectively removing items from an arr. 
- $inc operator increments a numeric field by a specified value. This is useful when you need to update numeric values by a fixed amount. 
- $currentDate operator sets a field to the current date or timestamp. It is valuable for tracking when a specific operator occured 

# Example Route
postRouter.put('/upVote/:postId, (req, res, next) => {
    {_id: req.params.postId},
    {
        $addToSet: {likedUsers: req.auth._id},
        $pull: {dislikedUsers: req.auth._id}
    },
    {new: true},
    (err, updatedPost) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedPost)
    }
})

# Example Model 
const postSchema = new Schema({
    title: {
        type: String, 
        required: true 
    },
    description: {
        type: String, 
        required: true 
    },
    datePosted:{
        type: Date, 
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: User, 
        required: true 
    },
    likedUsers: [{
        type: Schema.Types.ObjectId, 
        ref: User, 
    }],
    dislikedUsers: [{
        type: Schema.Types.ObjectId, 
        ref: User, 
    }]
})


Mongo DB Documentation Update Operators document 

JB: 
In Issue JS 
create two arrs . so when a user likes an issue, the id can be added to the arr. if it is in the arr the user cannot like/dislike again 

    likedUsers: [{
        type: Schema.Types.ObjectId, 
        ref: User, 
    }],
    dislikedUsers: [{
        type: Schema.Types.ObjectId, 
        ref: User, 
    }]

in issueRouter
//TO GET UPVOTE LOGIC 
issueRouter.put(`/upvote/:id`, (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.id}),
        {
            //you can only be in one array at once  
        $addToSet: {likedUsers: req.auth._id},
        //when a user goes to like after a dislike it will pull the id from the dislike and add it to the like 
        $pull: {dislikedUsers: req.auth._id}
    },
    {new: true},
    (err, updatedIssue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedIssue)
    }
})

})

test in postman 
post a new issue to 
/api/main/isssue/
get id of issue from this console 
notice the number of up or down votes 

send put req to api/main/issue/upvote/id of user
notice that the user's id is in the liked users arr 

in issue router, 

//TO GET DOWNVOTE LOGIC similar as above but finding by id and swapping arr in  $aaddtoset and $pull 

issueRouter.put('/downvote/:id, (req, res, next,) => {
     Issue.findByIdAndUpdate(
         req.params.id,
        {
        //you can only be in one array at once  
        $addToSet: {dislikedUsers: req.auth._id},
        //when a user goes to dislike after a dislike it will pull the id from the like and add it to the dislike 
        $pull: {likedUsers: req.auth._id}
    },
    {new: true},
    (err, updatedIssue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedIssue)
    }
    )
})


test in postman 

//GET ALL ISSUES BY USER ID 

issueRouter.get('/user', (req, res, next) =>{
    Issue.find({user: req.auth._id}, (err, issues) =>{
        if(err) {
            res.status(500)
            return next (err)
        }
        return res..status(200).send(issues)
    })
}

post a new issue to 

send put req to api/main/issue/downvote/id of user
notice that the user's id is in the liked users arr 
remember we are getting a whole object back 

on the front end 
//CREATE UPVOTE FUNCTION 
in context
function upvoteIssue(issueId){
    userAxios.put(`/api/main/issue/upvote/${issueId}`)
    .then(res => {
        console.log(res.data) //to see what the function is doing
        //for each issue, check to see if the issue._id matches the issueId parameter. If it does then that means that is the one we updated. return the res.data else return issue as is without changes.
        
        setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue))
        
        setUserState(prevUserState => {
            return {
                ...prevUserState, 
                issues: prev.UserState.issues.map(issue => issueId === issue._id ? res.data: issue)
            }
        })

    })
    .catch(err => console.log(err))
}

passit down to the value <UserContext.Provider value=upvoteIssue>

in Issue file 
import at top 
const {upvoteIssue}= useContext(UserContext)

in upvote button setup onclick with anonymous function and instead of hardcoded upvote number pass in the likedUsers arr and add it as a {likedUsers.length} will tell you how many users are in the arr 
<p>Upvote: {likedUsers.length} </p>
<button onClick ={ () => upvoteIssue(_id)}> UPvote </button>

test in client on npm run dev 
when you change the model you will want to drop the data so it doesn't throw an err 


//CREATE DOWNVOTE FUNCTION 

the upvote and downvote logic are exactly the same on the front end. copy and paste 
in Context: 

function downvoteIssue(issueId){
    userAxios.put(`/api/main/issue/downvote/${issueId}`)
    .then (res => {
        console.log(res.data)
        PUBLIC PAGE
        setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue))
        PROFILE PAGE
        setUserState(prevUserState => {
            return {
                ...prevUserState, 
                issues: prev.UserState.issues.map(issue => issueId === issue._id ? res.data: issue)
            }
        })

    })
    .catch(err => console.log(err))
}

passit down to the value <UserContext.Provider value=downvoteIssue>

in Issue file 
import at top 
const {downvoteIssue}= useContext(UserContext)
cont {likedUsers, dislikedUsers} =props

in downvote button setup onclick with anonymous function and instead of hardcoded upvote number pass in the likedUsers arr to props then and add it as a {likedUsers.length} will tell you how many users are in the arr 
<p>downvote: {dislikedUsers.length} </p>
<button onClick ={ () => downvoteIssue(_id)}> Downvote </button>

test in client on npm run dev 
make sure to test it in profile and public pages 

remember that we are currently using two pieces of state 
initState with issues:[] profile 

allIssues public page 

we need to update both states a