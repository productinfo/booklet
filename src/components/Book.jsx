import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { withStyles, classes } from '@material-ui/core/styles'

const style = {
    card: {
      marginTop: 20,
     padding: '15px 0 0 0',
     width: '100%',
     margin: 'auto',
     height: '100%',
     background: 'white'

    },

    image: {
      display: "block",
      margin: "auto",
      paddingLeft: 10,
      maxWidth: "100%",
      "object-fit": "cover",
      maxHeight: "150px"
    },

    details: {
      display: "flex",
      flexDirection: "column"
    },

    noLinkStyle: {
        textDecoration: 'none',
        color: 'black',
    },

    text: {
        width: "100%",
        textWrap: 1,
        "word-wrap": "break-word",
        fontSize: '1',
    },

    title: {
        textAlign:'center',
        margin: 0
    },

    author: {
        textAlign:'center',
      color: "grey",
      margin: 0
    },

    chip: {
        padding: 5,
        margin: '0px 10px 10px',
        marginTop: 10
    }

}
const Book = (props) => {
    const { classes, book } = props;
    const text = book.textSnippet && book.textSnippet.substr(0, 100).concat('...')

    return (
            <Grid container justify="center" spacing={8} className={classes.card}>
              {book.image_url && (
                <Grid item xs={4} sm={3} md={2}>
                  <img
                    className={classes.image}
                    alt="cover of the book"
                    src={book.image_url}
                  />
                </Grid>
              )}

                  <Grid item xs={8} sm={9} md={10} lg={10}>
                     <Link to={`/book/${book.id}`} className={classes.noLinkStyle}>

                    <h3 className={classes.title}>{book.title}</h3>
                      <p className={classes.author}>
                        {book.authors}
                      </p>

                      <p className={classes.text} dangerouslySetInnerHTML={{__html:text}}></p>

                     </Link>
                </Grid>
                <Grid item xs={12}><div style={{float:'right', padding: 10}}>{props.children}</div></Grid>
            </Grid>
    )
}

export default withStyles(style)(Book)
