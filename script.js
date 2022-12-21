function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;

    this.info = function() {
        return `${this.title} by ${this.author}, ${numPages} pages, ${this.haveRead}`;
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const lordOfTheRings = new Book('Lord of the Rings', 'J.R.R. Tolkien', 306, 'not read yet');
const dune = new Book('Dune', 'H.K. Simmons', 605, 'not read yet');
const gameOfThrones = new Book('Game of Thrones', 'George R.R. Martin', 800, 'not read yet');

let myLibrary = [theHobbit, lordOfTheRings, dune, gameOfThrones];

const newBookButton = document.getElementById('new-book');
const bookContainer = document.getElementById('book-container');
let count = 0;

newBookButton.addEventListener('click', function() {
    count += 1;
    const formContainer = document.createElement('form');
    const titleInput = document.createElement('input');
    const authorInput = document.createElement('input');
    const numPagesInput = document.createElement('input');
    const haveReadInput = document.createElement('input');

    titleInput.setAttribute('id', `title-${count}`);
    authorInput.setAttribute('id', `author-${count}`);
    numPagesInput.setAttribute('id', `num-pages-${count}`);
    haveReadInput.setAttribute('id', `num-pages-${count}`);

    formContainer.appendChild(titleInput);
    formContainer.appendChild(authorInput);
    formContainer.appendChild(numPagesInput);
    formContainer.appendChild(haveReadInput);
    bookContainer.prepend(formContainer);
})

// function addBookToLibrary() {

// }

// function removeBookfromLibrary() {

// }

// function toggleReadStatus() {

// }

function displayBooks(books) {
    if(books.length === 0) {
        let noticeContainer = document.createElement('h1');
        noticeContainer.innerHTML = "Nothing Here Yet";
        bookContainer.appendChild(noticeContainer);
    }

    for (const book of books) {
        const singleBookContainer = document.createElement('div');
        const titleContainer = document.createElement('h1');
        const authorContainer = document.createElement('p');
        const numPagesContainer = document.createElement('p');
        const haveReadContainer = document.createElement('p');

        titleContainer.innerHTML = book.title;
        authorContainer.innerHTML = book.author;
        numPagesContainer.innerHTML = book.numPages;
        haveReadContainer.innerHTML = book.haveRead;

        singleBookContainer.appendChild(titleContainer);
        singleBookContainer.appendChild(authorContainer);
        singleBookContainer.appendChild(numPagesContainer);
        singleBookContainer.appendChild(haveReadContainer);
        bookContainer.appendChild(singleBookContainer);
    }
}

displayBooks(myLibrary);