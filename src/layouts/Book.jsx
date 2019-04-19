import React from 'react'

import Grid from '@material-ui/core/Grid'
import DetailedBook from '../components/DetailedBook'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

import smLib from '../images/smOwned.png'
import smList from '../images/smWish.png'

const style = {
        backgroundColor: 'white',
        borderRadius: '15px 15px 0 0',
        padding: '50px 10px 20px',
        margin: 'auto',
        minHeight: 500,
        overflow: 'hidden',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
}


class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const { id } = (this.props.match.params);
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(resp => resp.json())
            .then(resp => {
                const data = getData(resp);
                this.setState(data);
            })
    }

    render () {
        const route1 = { link: '/library', image: smLib }
        const route2 = { link: '/booklist', image: smList };
        return (
            <>
            <Navigation route1={route1} route2={route2} back='/categories' />
            <Grid item sm={11} lg={10} style={style}>
                { this.state.book && <DetailedBook book={this.state.book}/>}
                { this.state.error && <h1 style={{textAlign:'center'}}>{this.state.error}</h1>}
            </Grid>
            <Grid item sm={11} lg={10} style={{margin: '0px auto 30px'}}>
                <Footer />
            </Grid>
            </>
        )
    }
}


function getData(book) {
    if(!book.volumeInfo) return { error: 'Error, not found.' }

    const data = {}, info = book.volumeInfo;
    data.id = book.id;
    data.title = info.title
    data.authors = info.authors && info.authors.join(', ')
    data.date = info.publishedDate
    data.description = info.description
    data.rating = info.averageRating
    data.ratingsCount = info.ratingsCount
    data.image = info.imageLinks && info.imageLinks.small
    data.preview = info.previewLink

    const sale = book.saleInfo || '';
    data.price = sale.retailPrice && ( sale.retailPrice.amount + sale.retailPrice.currencyCode )
    data.buyLink = sale.buyLink

    const access = book.accessInfo || '';
    data.epub = access.epub && access.epub.isAvailable && access.epub.acsTokenLink;
    data.pdf = access.pdf && access.isAvailable && access.pdf

    return { book: data };
}


export default Book;
