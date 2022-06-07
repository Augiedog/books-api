require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const booksController = require('./controllers/books-control.js')

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/books', booksController)
// ROUTES
app.get('/', (req, res) => {
    res.redirect('/books')
})
app.get('*', (req, res) => {
    res.render('error')
})

app.get('/products/:id', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
  })

// DB Connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// LISTEN
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Browsing at port', PORT)
})