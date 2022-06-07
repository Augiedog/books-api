const React = require('react')
const Def = require('./layouts/default')

function Index({ books }) {
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


        // <div class="col-sm-3">
        //     <div class="card" style="width: 100%;">
        //         ${books.imageURL ? `<img class="card-img-top" src="${books.imageURL}" />`
        //         : ``}
        //         <div class="card-body">
        //             <h5 class="card-title">${books.title}</h5>
        //             <h6 class="card-subtitle mb-2 text-muted">Available: ${books.quantity}</h6>
        //             <p class="card-text">${books.description}</p>
        //         </div>
        //     </div>
        // </div>