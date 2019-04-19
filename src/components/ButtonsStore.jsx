import React from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import LibraryAdd from '@material-ui/icons/LibraryAddSharp';
import LibraryCheck from '@material-ui/icons/LibraryBooksSharp';
import ListAdd from '@material-ui/icons/PlaylistAddSharp';
import ListCheck from '@material-ui/icons/PlaylistAddCheckSharp';

import { addToLibrary, addToBooklist, removeFromLibrary, removeFromBooklist } from '../redux/actions'

const styles = {
    width: '100%',
    overflowX: 'hidden',
    margin: '10px 0 25px'
}

class ButtonsStore extends React.Component {
    render() {
        const {
            addToLibrary,
            addToBooklist,
            removeFromLibrary,
            removeFromBooklist
        } = this.props

        const book = this.props.filtered ? this.props.book : filterBook(this.props.book);
        const inLibrary = this.props.inLibrary(this.props.book.id);
        const inBooklist = this.props.inBooklist(this.props.book.id);

        const booklist = {
            text: (inBooklist) ? 'In Booklist' : 'ADD TO BOOKLIST',
            click: (inBooklist) ? () => removeFromBooklist(book.id) : () => addToBooklist(book),
            icon: (inBooklist) ? <ListCheck/> : <ListAdd/> ,

        }
        const library = {
            text: (inLibrary) ? 'In Library' : 'Add to LIBRARY',
            click: (inLibrary) ? () => removeFromLibrary(book.id) : () => addToLibrary(book),
            icon: (inLibrary) ?  <LibraryCheck/> : <LibraryAdd/>,
        }

        return (
            <Grid container justify='center' spacing={24}>
                <Grid item xs={6} sm={5}>
                    <Button onClick={library.click} variant='contained' style={styles} color='secondary'>
                        <span style={{paddingRight:10}}>{library.text}</span>{library.icon}
                    </Button>
                </Grid>
                <Grid item xs={6} sm={5}>
                    <Button onClick={booklist.click} variant='contained' style={styles} color='secondary'>
                        <span style={{paddingRight:10}}>{booklist.text}</span>{booklist.icon}
                    </Button>
                </Grid>

            </Grid>
        )
    }
}


const mapStateToProps = ({library, booklist}, ownProps) => ({
    inLibrary: inLibrary(library),
    inBooklist: inBooklist(booklist),
    book: ownProps.book
})

const mapDispatchToProps = (dispatch) => ({
    addToLibrary: book => dispatch(addToLibrary(book)),
    removeFromLibrary: bookID => dispatch(removeFromLibrary(bookID)),
    addToBooklist: book => dispatch(addToBooklist(book)),
    removeFromBooklist: bookID => dispatch(removeFromBooklist(bookID)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ButtonsStore)


function inLibrary(library) {
    return bookID => !!library.find(book => book.id === bookID)
}

function inBooklist(booklist) {
    return bookID => !!booklist.find(book => book.id === bookID)
}

function filterBook(book) {
    const data = {
        id: book.id,
        title: book.title,
        authors: book.authors,
        image: book.image,
        textSnippet: book.description.substr(0, 100)
    }

    return data

}
