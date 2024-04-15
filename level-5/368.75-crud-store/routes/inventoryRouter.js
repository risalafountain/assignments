const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

//create new item
inventoryRouter.post('/', (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

//get all items
inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, items) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

//get one item 
inventoryRouter.get('/:id', (req, res, next) => {
    Inventory.findById(req.params.itemId, (err, item) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

//delete one item
inventoryRouter.delete('/:id', (req, res, next) => {
    Inventory.findByIdAndDelete(req.params.id, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(deletedItem)
    })
})

//update one 
inventoryRouter.put('/:id', (req, res, next) => {
    Inventory.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true },
        (err, updatedItem) => {
            if(err) {
                res.status(500)
                return next (err)
            }
            return res.status(201).send(updatedItem)
        })
})

module.exports = inventoryRouter 