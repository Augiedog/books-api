const React = require('react')
const Def = require('./layouts/default')

function Book({ books }) {
    books.map((book) => {
        return (
        <Def title={book.title}>
            <h2>{book.title}</h2>

        </Def>
        )
    })
}
module.exports = Book