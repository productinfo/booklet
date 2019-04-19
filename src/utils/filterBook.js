function filterBook(book) {
    if(!book.volumeInfo || !book.id) return null;
    const data = {}

    data.id = book.id;
    data.textSnippet = (book.searchInfo &&
        (book.searchInfo.textSnippet.split('|')[0] || book.searchInfo.textSnippet.split('|')[1]));
    data.authors =  book.volumeInfo.authors && book.volumeInfo.authors.join(', ');
    data.title = book.volumeInfo.title;
    data.image_url = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
    data.categories = book.volumeInfo.categories;

    return data;
}

export default filterBook
