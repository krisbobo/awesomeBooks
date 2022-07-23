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
