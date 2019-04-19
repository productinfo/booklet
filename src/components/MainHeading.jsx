import React from 'react'

const style = {
    fontSize: '4em',
    fontWeight: 700,
    textAlign: 'center',
    fontSpacing: 500,
    letterSpacing: 8,
    opacity: 0.8,
}

const MainHeading = (props) => {
    return (
        <div>
            <h1 style={style}>{props.title}</h1>
        </div>
    )
}

export default MainHeading
