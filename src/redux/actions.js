
export const ADD_TO_LIBRARY = 'ADD_TO_LIBRARY';
export const ADD_TO_BOOKLIST = 'ADD_TO_BOOKLIST';
export const REMOVE_FROM_LIBRARY = 'REMOVE_FROM_LIBRARY';
export const REMOVE_FROM_BOOKLIST = 'REMOVE_FROM_BOOKLIST';
export const SAVE_SEARCHED_BOOKS = 'SAVE_SEARCHED_BOOKS';
export const SAVE_TAILORED_BOOKS = 'ADD_TAILORED_BOOKS';

export function addToLibrary(book) {
    return { type: ADD_TO_LIBRARY, book }
}

export function addToBooklist(book) {
    console.log(book, 'adding it !');
    return { type: ADD_TO_BOOKLIST, book }
}

export function removeFromLibrary(bookID) {
    return { type: REMOVE_FROM_LIBRARY, bookID }
}

export function removeFromBooklist(bookID) {
    return { type: REMOVE_FROM_BOOKLIST, bookID }
}

export function saveSearchedBooks(books) {
    return { type: SAVE_SEARCHED_BOOKS, books }
}

export function saveTailoredBooks(books) {
    return { type: SAVE_TAILORED_BOOKS, books }
}
