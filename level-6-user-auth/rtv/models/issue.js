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
    }
})

module.exports=mongoose.model('Issue', issueSchema)