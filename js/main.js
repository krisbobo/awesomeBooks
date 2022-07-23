/* eslint-disable no-use-before-define */
// Create array of books
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookAdd = document.querySelector('#available-books');
const btn = document.querySelector('#add-button');

if (!localStorage.getItem('bookInfo')) {
  localStorage.setItem('bookInfo', JSON.stringify([]));
}

let books;

function saveBooks(book) {
  localStorage.setItem('bookInfo', JSON.stringify(book));
}

/* eslint-disable no-use-before-define */

function displayBookData() {
  books = JSON.parse(localStorage.getItem('bookInfo'));
  userUpdate();
}
displayBookData();

function removeBook() {
  books.splice(this, 1);
  saveBooks(books);
  displayBookData();
}

function userUpdate() {
  bookAdd.innerHTML = '';
  books.forEach((data, index) => {
    const newBook = document.createElement('div');
    newBook.classList.add('new-book');
    const para = document.createElement('p');
    para.textContent = `${data.bookTitle} By ${data.bookAuthor}`;
    const removebtn = document.createElement('button');
    removebtn.textContent = 'Remove';
    removebtn.addEventListener('click', removeBook.bind(index));
    newBook.appendChild(para);
    newBook.appendChild(removebtn);
    bookAdd.appendChild(newBook);
  });
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (bookTitle.value && bookAuthor.value) {
    const bookObj = { bookTitle: bookTitle.value, bookAuthor: bookAuthor.value };
    books.push(bookObj);
    saveBooks(books);
    displayBookData();
    bookTitle.value = '';
    bookAuthor.value = '';
  }
});
