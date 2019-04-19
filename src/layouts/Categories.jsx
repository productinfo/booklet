import React from "react";
import { connect } from 'react-redux'
import { saveSearchedBooks } from '../redux/actions'
import fetchBooks from '../utils/fetchBooks'

import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles'

import SearchedBooks from "../components/SearchedBooks";
import Search from "../components/Search";
import BookRowContainer from "../containers/BookRowContainer"
import Header from '../components/Header'
import Navigation from '../components/Navigation'

import filterBook from '../utils/filterBook'

import image from '../images/find.png'
import smList from '../images/smWish.png'
import smLib from '../images/smOwned.png'

const styles = {
    title: {
        position: 'absolute',
        padding: 80,
        borderRadius: 5,
        background: 'white',
        textAlign: 'center',
        margin: '0 10%',
        width: '80%',
        top: 120,
        textWeight: 900,
        'box-shadow': '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
    },
    header: {
        height: 500,
    }
}


class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }


  handleSearchInput(e) {
    this.setState({ search: e.target.value });
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    fetchBooks(this.state.search, 0).then(rsp => {
        this.setState({ search: ''});
        if(!rsp) return;
        const books = rsp.books.map(book => filterBook(book))
        this.props.saveSearchedBooks(books)
    });
  }

  render() {

    const route1 = { link: '/library', image: smLib }
    const route2 = { link: '/booklist', image: smList };
    const searched = {
        books: this.props.searched,
        title: `Results:`
    }
    return (
      <>
        <Navigation route1={route1} route2={route2} back='/' />
        <Header image={image} title='Find Books'>
            <Grid container>
                <Search handleInput={this.handleSearchInput} handleSubmit={this.handleSearchSubmit} value={this.state.search}/>
            </Grid>
        </Header>
        <SearchedBooks className='search'/>
        <BookRowContainer data={searched} />
        <BookRowContainer data={this.props.bestSelling} />
        <BookRowContainer data={this.props.recommended} />
        <BookRowContainer data={this.props.tailored} />
      </>
    );
  }
}

const mapStateToProps = ({ tailored, bestSelling, recommended, searched }) => (
    {
        searched,
        tailored,
        bestSelling,
        recommended
    }
)

const mapDispatchToProps = dispatch => ({
    saveSearchedBooks: books => dispatch(saveSearchedBooks(books))
})

const CategoryPage = connect(mapStateToProps, mapDispatchToProps)(Categories)

export default withStyles(styles)(CategoryPage);
