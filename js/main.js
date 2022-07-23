/* eslint-disable max-classes-per-file */
// ======== book class: book representation =========
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// ======= class storage: handle local storage ==========

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static bookAdd(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static bookRemoval(del) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.del === del) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// ======== UI class: handle ui ========

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><a href="#" class="delete">Remove</td>
    `;
    list.appendChild(row);
  }

  static deleteBook(del) {
    if (del.classList.contains('delete')) {
      del.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// ============== event: display books ============

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// ============== event: add a book =============

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // get the form value

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (!title || !author) return;
  const book = new Book(title, author);
  UI.addBookToList(book);

  Store.addBook(book);

  UI.clearFields();
});

// ============event: remove a book ============

document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove book from UI

  UI.deleteBook(e.target);

  // remove book from local store

  Store.removeBook();
});
