const year = document.querySelector('.year');
const container = document.querySelector('.layout');
const bookList = document.querySelector('.book');
const contact = document.querySelector('.contact');
const first = document.querySelector('.list');
const second = document.querySelector('.add');
const third = document.querySelector('.contact-me');
const title = document.querySelector('.book-header');

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: 'false',
};
const today = new Date();
const locale = navigator.language;

year.textContent = today.toLocaleDateString('en-US', options, locale);

first.addEventListener('click', (e) => {
  e.preventDefault();
  container.style.display = 'block';
  bookList.style.display = 'none';
  contact.style.display = 'none';
});

second.addEventListener('click', (e) => {
  e.preventDefault();
  container.style.display = 'none';
  bookList.style.display = 'flex';
  contact.style.display = 'none';
  title.style.display = 'none';
});

third.addEventListener('click', (e) => {
  e.preventDefault();
  container.style.display = 'none';
  bookList.style.display = 'none';
  contact.style.display = 'block';
  title.style.display = 'none';
});