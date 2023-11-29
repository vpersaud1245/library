const libraryGrid = document.querySelector(".library-grid");
const addBookCard = document.querySelector(".add-book-card");
const library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  library.push(book);
}

function displayBooks() {
  library.forEach((book) => {
    console.log(book);
  });
}

function createBookCardElement(book) {
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  const bookInfo = document.createElement("div");
  bookInfo.className = "book-info";
  bookCard.appendChild(bookInfo);
  const bookTitle = document.createElement("div");
  bookTitle.className = "book-title";
  bookTitle.textContent = book.title;
  bookInfo.appendChild(bookTitle);
  const numOfPages = document.createElement("div");
  numOfPages.className = "num-of-pages";
  numOfPages.textContent = `Pages: ${book.pages}`;
  bookInfo.appendChild(numOfPages);
  const author = document.createElement("div");
  author.className = "author";
  author.textContent = `by ${book.author}`;
  bookInfo.appendChild(author);
  bookCard.appendChild(document.createElement("hr"));
  const bookCardButtons = document.createElement("div");
  bookCardButtons.className = "book-card-buttons";
  const changeReadStatusButton = document.createElement("button");
  const progressInfo = document.createElement("div");
  progressInfo.className = "progress-info";
  changeReadStatusButton.className = "change-read-status";
  if (book.isRead) {
    changeReadStatusButton.textContent = "Read";
    progressInfo.textContent = "Completed";
  } else {
    changeReadStatusButton.textContent = "Not Read";
    progressInfo.textContent = "In Progress";
  }
  bookCardButtons.appendChild(changeReadStatusButton);
  const deleteBookButton = document.createElement("button");
  deleteBookButton.className = "delete-book";
  deleteBookButton.textContent = "Delete";
  bookCardButtons.appendChild(deleteBookButton);
  bookCard.appendChild(bookCardButtons);
  const bottomBreak = document.createElement("hr");
  bottomBreak.className = "bottom-break";
  bookCard.appendChild(bottomBreak);
  bookCard.appendChild(progressInfo);
  libraryGrid.insertBefore(bookCard, addBookCard);
}

addBookToLibrary(new Book("Harry Potter", "J.K Rowling", 344, true));
addBookToLibrary(new Book("Lord of the Rings", "J.J Tolkein", 546, false));
addBookToLibrary(new Book("Atomic Habits", "James Clear", 214, false));
addBookToLibrary(
  new Book(
    "How to Win Friends and Influence People",
    "Dale Carneigie",
    409,
    true
  )
);

displayBooks();
createBookCardElement(new Book("Lord of the Rings", "J.J Tolkein", 546, true));
createBookCardElement(new Book("Harry Potter", "J.K Rowling", 344, true));
