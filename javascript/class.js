// Define the Book object
function Book(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }
  
  // Array to store books
  const library = [];
  
  // Function to add a new book to the library
  function addBook(title, author) {
    const newBook = new Book(title, author);
    library.push(newBook);
  }
  
  // Function to borrow a book
  function borrowBook(title) {
    const book = library.find(book => book.title === title);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      console.log(`You have successfully borrowed "${book.title}" by ${book.author}.`);
    } else {
      console.log(`"${title}" is not available for borrowing.`);
    }
  }
  
  // Function to return a book
  function returnBook(title) {
    const book = library.find(book => book.title === title);
    if (book && !book.isAvailable) {
      book.isAvailable = true;
      console.log(`You have successfully returned "${book.title}" by ${book.author}.`);
    } else {
      console.log(`"${title}" is not available for returning.`);
    }
  }
  
  // Function to list all books
  function listBooks() {
    console.log("List of Books:");
    library.forEach(book => {
      console.log(`Title: ${book.title} | Author: ${book.author} | Available: ${book.isAvailable ? 'Yes' : 'No'}`);
    });
  }
  
  // Example usage
  addBook("The Hobbit", "J.R.R. Tolkien");
  addBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling");
  borrowBook("The Hobbit");
  listBooks();
  returnBook("The Hobbit");
  listBooks();
  