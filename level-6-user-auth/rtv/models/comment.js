const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    comment: {
        type: String, 
        required: true
    },
    //many to many
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    //one to many
    issue:{
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    }

})

module.exports = mongoose.model('Comment', commentSchema)