const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    //if false downvote if true upvote, will this work...
    votes:{
        type: Boolean,
        default: false,
    },
    //or does each vote need its own count? and handle boolean in router?
    upVotes:{
        type: Number,
        default: 0
    },
    downVotes: {
        type: Number, 
        default: 0
    },
    totalVotes: {
        type: Number,
        default: 0
    },
    //one to many 
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
})

module.exports=mongoose.model('Issue', issueSchema)