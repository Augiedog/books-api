const React = require('react')
const Def = require('./layouts/default')

function Index({ books, title }) {
    return (
        <Def title={books.title}>
            <h2>Index page</h2>
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <a href={`/books/${book.id}`}>{book.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </Def>
    )
}

module.exports = Index