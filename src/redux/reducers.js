import { ADD_TO_LIBRARY, ADD_TO_BOOKLIST,
    REMOVE_FROM_LIBRARY, REMOVE_FROM_BOOKLIST,
    SAVE_SEARCHED_BOOKS, SAVE_TAILORED_BOOKS } from './actions'

import { combineReducers } from 'redux'

function library(state = [], action) {
    switch(action.type) {
        case ADD_TO_LIBRARY:
            if(!(action.book instanceof Object) || !action.book.id) return state;

            const bool = !!(state.find(book => book.id === action.book.id))
            if(bool) return state;

            return Object.assign([...state, action.book ]);

        case REMOVE_FROM_LIBRARY:
            return Object.assign([...state.filter(book => book.id !== action.bookID)])

        default:
            return state
    }
}

function booklist(state = [], action) {
    switch(action.type) {
        case ADD_TO_BOOKLIST:
            if(!(action.book instanceof Object) || !action.book.id) return state;

            const bool = !!(state.find(book => book.id === action.book.id))
            if(bool) return state;

            return Object.assign([...state, action.book ]);

        case REMOVE_FROM_BOOKLIST:
            return Object.assign([...state.filter(book => book.id !== action.bookID)])

        default:
            return state;
    }
}

function searched(state = [], action) {
    switch (action.type) {
        case SAVE_SEARCHED_BOOKS:
            return action.books
        default:
            return state
    }
}

function tailored(state = {}, action) {
    switch (action.type) {
        case SAVE_TAILORED_BOOKS:
            if(!action.books || !action.books.length) return state

            return Object.assign({}, state, { books: action.books.concat(state.books) })
        default:
            return  state
    }
}

function bestSelling(state = [], action) {
    return state;
}

function recommended(state = [], action) {
    return state;
}

const simpleReducers = combineReducers({
    library,
    booklist,
    searched,
    bestSelling,
    recommended,
    tailored
})

export default simpleReducers
