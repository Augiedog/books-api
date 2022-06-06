const express = require('express')
const router = express.Router()

const Books = require('../models/books.js')
const oldBooks = require('../models/DB.js')
const { populate } = require('../models/books.js')

router.get('/', async (req, res) => {
    try {
        const books = await Books.find()
        res.render('index', {
            books: books,
            title: 'Book'
        })
    } catch (error) {
        console.log(error)
        res.render(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Books.findById(id)
        res.render('book')
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