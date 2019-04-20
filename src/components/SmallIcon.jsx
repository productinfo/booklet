import React from 'react'
import posed from 'react-pose'
import { Link } from 'react-router-dom'

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

const image = {

        width: 50,
        margin: '0 5px',
        cursor: 'pointer'
}

const SmallIcon = (props) => {
    return (
        <Box style={{display:'inline-block'}}>
            <Link to={props.link}>
                <img alt='icon for the link' style={image} src={props.image}/>
            </Link>
        </Box>
    )
}

export default SmallIcon
