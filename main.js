import './books.js'

createBookList();

async function createBookList(){
    const response = await fetch('./books.json');
    const json     = await response.json();
    const books    = document.getElementById('books');
console.log("createBOOKLIST")
    json.books.forEach((book) => {
        const element = document.createElement('mit-book');
        element.book = book;
        books.appendChild(element);
    })
}
