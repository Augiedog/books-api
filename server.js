require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the site about BOOKS')
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