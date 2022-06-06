const React = require('react')
const book = require('../models/books.js')
const Def = require('./layouts/default')

function Index( books ) {
    return (
        <Def title={title}>
            <h2>index page</h2>
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <a href={`/books/${book.id}`}>{book.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </Def>
    )
}

module.exports = Index