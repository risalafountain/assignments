const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false
  },
  imgUrl: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Todo", todoSchema)

//create a one to many relationship--each user can have many todos 