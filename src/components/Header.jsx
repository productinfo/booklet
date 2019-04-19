import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    main: {
        background: 'white',
        boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        margin: '-20px auto 0',
        textAlign: 'center',
        padding: '50px 0',
        borderRadius: 10,
    },

    children:{
        margin: '-5px auto 0',
    },

    title: {
        fontWeight: 500,
        fontFamily: 'avenir',
        fontSize: '3em',
        letterSpacing: '4px',
        color: 'elegant',
        margin: 0
    },
    img: {
        display: 'block',
        margin: '15px auto 0 auto',

    }
}

const Header = (props) => {
    const { classes } = props;
    return (
        <header>
        <img src={props.image} width={120} className={classes.img} alt='Icon of the page'/>
        <Grid item xs={11} sm={9} md={8} className={classes.main}>
            <h1 className={classes.title}>{props.title}</h1>
        </Grid>
        <Grid item xs={11} sm={9} md={8} className={classes.children}>{props.children}</Grid>
        </header>
    )
}

export default withStyles(styles)(Header)
