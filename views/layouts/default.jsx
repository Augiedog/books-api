const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="style.css"></link>
                <title>{html.title || 'Books'}</title>
            </head>
            <body>
                <div className='wrapper'>
                    <header>
                        <h1><a href="/books">Books</a></h1>
                    </header>
                    <div className='container'>
                        {html.children}
                    </div>
                </div>
            </body>
        </html>
    )
}

module.exports = Def