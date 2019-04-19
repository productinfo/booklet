import fetchBooks from './fetchBooks'
import filterBook from './filterBook'

async function filteredFetch(category, { booklist, library }) {
    const savedBooks = booklist.concat(library);
    let index = 0, queryBooks;
    const result = [];

    while(result.length < 8) {
        let response = await fetchBooks(category, index);
        [queryBooks, index] = [response.books, response.index];

        if(!queryBooks) return;

        queryBooks.forEach(queryBook => {
            if(!savedBooks.find(savedBook => savedBook.id === queryBook.id)) result.push(queryBook);
        })
    }

    return result.map(book => filterBook(book));
}


function mostPopularCategory({library, booklist}) {
    const categories = {};
    let category, count;
    // this function adds categories as keys into the object and the number of apperances as values
    library.concat(booklist).forEach(book => {
        if(book.categories) {
            book.categories.forEach(cat => {
                categories[cat] ? categories[cat] += 1 : categories[cat] = 1;
            })
        }
    })

    for(let [key, value] of Object.entries(categories)){
        if (!count || value > count) {
            category = key;
            count = value;
        }
    }
    return category
}

async function tailoredBooks(state, callback) {
    const { tailored, library, booklist } = state;

    if(tailored.books.length < 8 && (library.length || booklist.length)) {
        const category = mostPopularCategory(state);
        const books = await filteredFetch(category, state);
        if(!books) return;

        callback(books);
    }
}


export default tailoredBooks
