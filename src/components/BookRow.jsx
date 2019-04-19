import Book from './Book'
import React from 'react'

import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ButtonsStore from '../components/ButtonsStore'

const styles = {
    mainGridStyle: {
       margin:'100px auto',
       background:'white',
       padding: '20px 10px',
       borderRadius: 30,
       'box-shadow': '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
   },
   secondaryGridStyle: {
       maxHeight:550,
       overflowY:'scroll',
       margin: 5
   },
   header: {
       textAlign:'center',
   }
}



const BookRow = (props) => {
    const { data, classes } = props;

    const { books, title, subtitle } = data;

    if(!books || !books.length) return <div />

    const Books = books.map(book => (
        <Grid item xs={12} sm={6} md={6} key={book.id}>
            <Book book={book}> <ButtonsStore book={book} filtered={1} /></Book>
        </Grid>));

    return (
        <Grid className={classes.mainGridStyle} item sm={10}>

            <Grid item xs={12} className={classes.header}>
                <h3 className={classes.title}>{title}</h3>
                <p>{subtitle}</p>
            </Grid>

            <Grid container className={classes.secondaryGridStyle} spacing={8} alignItems="stretch" >
                {Books}
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(BookRow)
