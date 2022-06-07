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
            title: 'title'
        })
    } catch (error) {
        console.log(error)
        res.render(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const books = await Books.findById(id)
        .then(theBook => {
            res.render('book', {
                book: theBook
            })
        })
    } catch (error) {
        console.log(error)
        res.render("error")
    }
})
router.get('/seed', async (req, res) => {
    try {
        await Books.insertMany(oldBooks)
        res.redirect('/books')
    } catch (error) {
        console.log(error)
        res.render("error")
    }
})
// Delete 
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Books.findByIdAndDelete(id)
        res.status(303).redirect('/books')
    } catch (error) {
        console.log(error)
        res.render('error')
    }
})
// POST
router.post('/', async (req, res) => {
    try {
        await Books.create(req.body)
        res.redirect('/books')
    } catch (error) {
        console.log(error)
        res.render('error')
    }
})
// Update 
router.put('/', async (req, res) => {
    const { id } = req.params
    try {
        await Books.findByIdAndUpdate(id, req.body)
    } catch (error) {
        console.log(error)
        res.render(error)
    }
})

module.exports = router