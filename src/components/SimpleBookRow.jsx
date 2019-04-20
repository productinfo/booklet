import React from 'react'

import Book from './Book'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import SmallIcon from './SmallIcon'
import smFind from '../images/smFind.png'

const styles = theme => ({
    container: {
        background: 'white',
        minHeight: 300,
        borderRadius: '15px 15px 0 0',
        overflow: 'hidden'
    },
    hr: {
        [theme.breakpoints.up('lg')]: {
            display: 'none'
        }
    },

    error: {
        lineHeight: 8,
    },

    item: {
        marginBottom: 50
    }
})

const SimpleBookRow = (props) => {
    const { classes } = props;
    let content;
    if(props.books.length) {
        content = props.books.map((book, index) => (
            <Grid key={book.id} item xs={12} md={10} lg={5} className={classes.item} >
                    <Book book={book}>
                        <Button onClick={() => props.remove(book.id)} color='primary' variant='outlined'>REMOVE</Button>
                    </Book>
                    { (props.books.length > index + 2) ? <hr /> : (props.books.length > index + 1) && <hr className={classes.hr} /> }
            </Grid>
        ))
    } else {
        content = <h1 className={classes.error}>No books here! Go find one <SmallIcon link='/categories' image={smFind}/></h1>
    }

    return (
        <Grid container className={classes.container} alignItems='stretch' justify='space-evenly'>
            {content}
        </Grid>
    )
}

export default withStyles(styles)(SimpleBookRow)
