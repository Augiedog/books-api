const React = require('react')
const Def = require('./layouts/default')

function Book({ books, title }) {
    books.map((book) => {
        return (
            <Def title={title}>
            <h2>{book.title}</h2>

        </Def>
        )
    })
}
module.exports = Book