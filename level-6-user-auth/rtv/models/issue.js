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

module.exports=mongoose.model('Issue', issueSchema)