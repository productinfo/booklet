import React from 'react'

import Book from './Book'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const container = {
    background: 'white',
    minHeight: 300,
    borderRadius: '15px 15px 0 0',
    overflow: 'hidden'
}

const item = {
    marginBottom: 50
}



const SimpleBookRow = (props) => {
    if(!props.books) return <Grid container style={container} />

    const books = props.books.map((book, index) => (
        <Grid key={book.id} item xs={12} md={10} lg={5} style={item} >
                <Book book={book}>
                    <Button onClick={() => props.remove(book.id)} color='primary' variant='outlined'>REMOVE</Button>
                </Book>
            { (++index < props.books.length) ? <hr /> : null }
        </Grid>
    ))

    return (
        <Grid container style={container} alignItems='stretch' justify='space-evenly'>
            {books}
        </Grid>
    )
}

export default SimpleBookRow
