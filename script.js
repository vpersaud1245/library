const libraryGrid = document.querySelector(".library-grid");
const addBookCard = document.querySelector(".add-book-card");
const addBookButton = document.querySelector(".add-book-button");
const dialog = document.querySelector("dialog");
const submitButton = document.querySelector(".submit-button");
const form = document.querySelector("form");
const titleInput = document.querySelector("input[name=title-input]");
const authorInput = document.querySelector("input[name=author-input]");
const pageInput = document.querySelector("input[name=page-input]");
const isReadInput = document.querySelector("input[name=read-input]");
let library = [];

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
    createBookCardElement(book);
  });
}

function createBookCardElement(book) {
  let bookIndex = library.indexOf(book);
  console.log(bookIndex);
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
    changeReadStatusButton.style.backgroundColor = "lightgreen";
  } else {
    changeReadStatusButton.textContent = "Not Read";
    progressInfo.textContent = "In Progress";
    changeReadStatusButton.style.backgroundColor = "lightcoral";
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

  deleteBookButton.addEventListener("click", (e) => {
    console.log(book);
    library.splice(bookIndex, 1);
    bookCard.remove();
    console.log(library);
    if (library.length == 0) {
      if (window.innerWidth >= 1200) {
        addBookCard.style.gridColumn = "2";
      } else if (window.innerWidth >= 700) {
        addBookCard.style.gridColumn = "span 2";
      } else {
        addBookCard.syle.gridColumn = "auto";
      }
    }
  });

  changeReadStatusButton.addEventListener("click", (e) => {
    if (book.isRead) {
      book.isRead = false;
      library[bookIndex].isRead = false;
      changeReadStatusButton.textContent = "Not Read";
      progressInfo.textContent = "In Progress";
      changeReadStatusButton.style.backgroundColor = "lightcoral";
    } else if (book.isRead == false) {
      book.isRead = true;
      library[bookIndex].isRead = true;
      changeReadStatusButton.textContent = "Read";
      progressInfo.textContent = "Completed";
      changeReadStatusButton.style.backgroundColor = "lightgreen";
    }
    console.log(`library after`);
    console.log(library);
  });
}

addBookButton.addEventListener("click", (e) => {
  dialog.showModal();
});

dialog.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") {
    form.reset();
    dialog.close();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let book = new Book(
    titleInput.value,
    authorInput.value,
    parseInt(pageInput.value),
    isReadInput.checked
  );
  addBookToLibrary(book);
  createBookCardElement(book);
  form.reset();
  dialog.close();

  addBookCard.style.gridColumn = "auto";
});

window.addEventListener("resize", (e) => {
  if (library.length == 0) {
    if (window.innerWidth >= 1200) {
      addBookCard.style.gridColumn = "2";
    } else if (window.innerWidth < 1200) {
      addBookCard.style.gridColumn = "span 2";
    } else if (window.innerWidth < 700) {
      addBookCard.style.gridColumn = "auto";
    }
  }
});

// Test data

// addBookToLibrary(
//   new Book("Harry Potter and the Goblet of Fire", "J.K Rowling", 459, true)
// );
// addBookToLibrary(
//   new Book(
//     "How to Win Friends and Influence People",
//     "Dale Carnegie",
//     745,
//     false
//   )
// );
// addBookToLibrary(new Book("Atomic Habits", "James Clear", 244, true));
// addBookToLibrary(new Book("The Hobbit", "J.J Tolkein", 732, true));

// displayBooks();
