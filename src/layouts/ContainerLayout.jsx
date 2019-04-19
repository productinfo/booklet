import React from 'react'
import { connect } from 'react-redux'

import { removeFromLibrary, removeFromBooklist } from '../redux/actions'

import Header from '../components/Header'
import Footer from '../components/Footer'
import SimpleBookRow from '../components/SimpleBookRow'
import Navigation from '../components/Navigation'

import Grid from '@material-ui/core/Grid'


const ContainerLayout = (props) => {
    const {image, title, subtitle } = props.data
    const books = props.books;

    return (
        <>
        <Navigation back='/' />
        <Header image={image} title={title}>
            <p>{subtitle}</p>
        </Header>
        <Grid item sm={11} style={{margin: '50px auto'}}>
            <SimpleBookRow books={books} remove={props.remove}/>
            <Footer />
        </Grid>
        </>
    )
}

const mapStateToProps = (state, { data }) => ({
    books: state[data.storeName]
})

const mapDispatchToProps = (dispatch, { data }) => ({
    remove: (data.storeName === 'library') ? bookID => dispatch(removeFromLibrary(bookID)) : bookID => dispatch(removeFromBooklist(bookID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLayout)
