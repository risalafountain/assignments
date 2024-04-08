const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: "string",
        required: true,
    },
    lastName: {
        type: "string",
        required: true,
    },
    living: {
        type: "boolean",
        required: true
    },
    bountyAmount: {
        type: "number",
        required: true,
    },
    type: {
        type: "string",
        required: true, 
    }
})

module.exports = mongoose.model('bounty', bountySchema)