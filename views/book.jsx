const React = require('react')
const Def = require('./layouts/default')

function Book({ book }) {
    const yearwrite = book.getYear()
        return (
        <Def title={book.title}>
            <h2>{book.title}</h2>
            <p>{yearwrite}</p>
            <p>{book.description}</p>
            <img src={book.imageURL} alt={book.year} />
        </Def>
        )
    }
module.exports = Book