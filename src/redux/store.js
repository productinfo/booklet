import { createStore } from 'redux'
import bookApp from './reducers'

import bestSelling from '../data/bestSelling'
import recommended from '../data/recommended'

const initialState = () => {
    let library = JSON.parse(localStorage.getItem('library'))
    library = (library instanceof Array) ? library : [];

    let booklist = JSON.parse(localStorage.getItem('booklist'))
    booklist = (booklist instanceof Array) ? booklist : [];

    const tailored ={
        title: 'TAYLORED FOR YOU',
        subtitle: 'These are the books that we think you are going to like.',
        books: []
    }

    return ({
        booklist,
        library,
        tailored,
        searched: [],
        bestSelling,
        recommended,
    })
}
const store = createStore(bookApp, initialState())
export default store
