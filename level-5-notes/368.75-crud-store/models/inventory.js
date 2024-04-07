const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    product: {
        type: 'string',
        required: true
    },
    category: {
        type: 'string',
        required: true
    },
    price: {
        type: 'number',
        required: true
    },
    quantity: {
        type: 'number',
        required: true
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)