const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: Number,
    },
    quantity: {
        type: Number
    },
    imageURL: {
        type: String
    }
})

booksSchema.methods.getYear = function() {
    return `${this.title} was written in ${this.year}.`
}

module.exports = mongoose.model('Books', booksSchema)
