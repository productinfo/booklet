import React from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles, withTheme } from '@material-ui/core/styles'
import ButtonsStore from '../components/ButtonsStore'

const styles = theme => ({
    title: {
        margin: 0,
        textAlign: 'center'
    },
    author: {
        color: 'rgb(90,90,90)',
        textAlign: 'center',
        fontWeight: 200,
        margin: 0
    },
    image: {
        width: '100%',
        maxWidth: 220,
        display: 'block',
        margin:'auto'
    },
    content: {
        order: 0
    },
    media: {
        order: 0,
        [theme.breakpoints.up('md')]: {
            order: 1
        }
    }
})

const DetailedBook = (props) => {
    const { book, classes } = props

    return (
        <Grid container justify='center' spacing={24}>
            <Grid item sm={6} md={3} className={classes.media}>
                <img className={classes.image} src={book.image} alt='cover of the book' />
            </Grid>
            <Grid item md={8} sm={12} className={classes.content}>
                <h1 className={classes.title}>{ book.title }</h1>
                <h2 className={classes.author}>{ book.authors }</h2>
                <ButtonsStore book={book}/>
                <p dangerouslySetInnerHTML={{ __html: book.description }} />
                {book.date && <p>Release date: {book.date}</p>}
            </Grid>
            <Grid item sm={5} style={{order:2}}>
                {book.epub && <p>Epub: <a href={book.epub}>Download Link</a></p>}
                {book.Pdf && <p>Pdf: <a href={book.pdf}>Pdf Link</a></p>}
                {book.buyLink && book.price && <p>Price: <strong>{book.price}</strong>, <a href={book.buyLink}>Shop Link</a></p>}
            </Grid>
            <Grid item sm={5} style={{order:2}}>
                {book.preview && <p>Preview the book: <a href={book.preview}>Preview</a></p>}
                {book.rating && book.ratingsCount && <p>Rounded Rating: <strong>{book.rating}</strong> ({book.ratingsCount} rates)</p>}
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(withTheme()(DetailedBook))
