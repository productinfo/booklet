async function fetchBooks(query, index = 0) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${index}`
    let response = await fetch(url);
    response = await response.json();

    return (response.items && { books:response.items, index: index + response.items.length }) || 0;
}

export default fetchBooks
