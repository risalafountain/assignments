const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

module.exports = mongoose.model('Comment', commentSchema)