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
