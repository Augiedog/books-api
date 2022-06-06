const express = require('express')
const router = express.Router()

const Books = require('../models/books.js')
const oldBooks = require('../models/DB.js')

router.get('/', (req, res) => {
    res.send('books page')
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Books.findById(id)
    } catch (error) {
        console.log(error)
        res.send("ERROR")
    }
})
router.get('/seed', async (req, res) => {
    try {
        await Books.insertMany(oldBooks)
        res.redirect('/books')
    } catch (error) {
        console.log(error)
        res.send("ERROR")
    }
})


module.exports = router