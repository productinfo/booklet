import React from 'react'
import posed from 'react-pose'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Arrow from '@material-ui/icons/ArrowBackIosSharp'


const Box = posed.div({
    pressable: true,
    hoverable: true,
    init: {
        scale: 1,
    },
    press: {
        scale:1.1
    },
    hover: {
        scale: 1.2
    }
})

const styles = {
    navbar: {
        display: 'block',
        clear: 'both',
        marginBottom: 10,
        height: 100,
    },
    tools: {
        background: 'white',
        margin: 10,
        padding: '5px 10px',
        borderRadius: 15,
        'box-shadow': '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        float: 'right'
    },
    back: {
        display:'inline-block',
        cursor: 'pointer',
        margin: 10,
    },
    images: {
        width: 50,
        margin: '0 5px',
        cursor: 'pointer'
    },
    arrow: {
        fontSize: 44,
        color: '#444',
        paddingRight: 3,
    }

}

const Navigation = (props) => {
    const { classes, route1, route2, back } = props
    return (
        <nav className={classes.navbar}>
            <div className={classes.back}>
                <Box><Link to={back}><Fab color='secondary' aria-label='back' ><Arrow /></Fab></Link></Box>
            </div>
            {route1 && route2 && (
            <div className={classes.tools}>
                <Box style={{display:'inline-block'}}><Link to={route1.link}><img alt='icon for the link' className={classes.images} src={route1.image}/></Link></Box>
                <Box style={{display:'inline-block'}}><Link to={route2.link}><img alt='icon for the link' className={classes.images} src={route2.image}/></Link></Box>
            </div>
            )}
        </nav>
    )
}

export default withStyles(styles)(Navigation)
