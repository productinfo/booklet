import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux'

import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import ScrollTop from './components/ScrollTop'

import Book from "./layouts/Book";
import ContainerLayout from "./layouts/ContainerLayout";
import Categories from "./layouts/Categories";
import Home from "./layouts/Home";

import { library as libraryData, booklist as booklistData } from './data/booklet'
import { saveTailoredBooks } from './redux/actions'
import tailoredBooks from './utils/fetchTailored'

const theme = createMuiTheme({
    palette: {
        primary: { main:'#000'},
        secondary: { main:'#fff'}
    },
    fontFamily: [
        'Avenir',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
    ]
})

class App extends Component {
    componentDidMount() {
        tailoredBooks(this.props.state, this.props.tailored);
    }

    render() {
        const { state } = this.props
        localStorage.library = JSON.stringify(state.library);
        localStorage.booklist = JSON.stringify(state.booklist);

        const booklist = () => <ContainerLayout data={booklistData} />;
        const library = () => <ContainerLayout data={libraryData} />;

        return (
          <>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
                <Router>
                    <ScrollTop>
                      <Route exact path="/" component={Home} />
                      <Route path="/categories" component={Categories} />
                      <Route path="/booklist" render={booklist} />
                      <Route path="/library" render={library} />
                      <Route path="/book/:id" component={Book} />
                    </ScrollTop>
                </Router>
            </MuiThemeProvider>
          </>
        );
      }
    }

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ tailored: books => dispatch(saveTailoredBooks(books))})

export default connect(mapStateToProps, mapDispatchToProps)(App);
