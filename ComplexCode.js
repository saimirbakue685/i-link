/*
Filename: ComplexCode.js

This code demonstrates a complex JavaScript application that simulates a virtual bookstore. It includes functionality such as adding books, removing books, searching for books, and managing user accounts.

*/

// ---------------
// Book class
// ---------------

class Book {
  constructor(title, author, genre, price, stock) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.stock = stock;
  }
}

// ---------------
// Bookstore class
// ---------------

class Bookstore {
  constructor() {
    this.books = []; // Array to store books
    this.users = {}; // Object to store user accounts
  }

  addBook(title, author, genre, price, stock) {
    const newBook = new Book(title, author, genre, price, stock);
    this.books.push(newBook);
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    console.log(`Book "${title}" has been removed from the bookstore.`);
  }

  searchBooks(query) {
    const results = this.books.filter((book) => {
      const { title, author, genre } = book;
      return title.includes(query) || author.includes(query) || genre.includes(query);
    });

    if (results.length > 0) {
      console.log(`Search results for "${query}":`);
      results.forEach((book) => console.log(`${book.title} by ${book.author}`));
    } else {
      console.log(`No books found for "${query}".`);
    }
  }

  registerUser(username, password) {
    if (this.users.hasOwnProperty(username)) {
      console.log(`Username "${username}" is already taken. Please choose a different one.`);
    } else {
      this.users[username] = password;
      console.log(`User "${username}" has been registered successfully.`);
    }
  }

  loginUser(username, password) {
    if (this.users.hasOwnProperty(username)) {
      if (this.users[username] === password) {
        console.log(`User "${username}" has been logged in.`);
      } else {
        console.log(`Invalid password for user "${username}". Please try again.`);
      }
    } else {
      console.log(`User "${username}" does not exist. Please register an account.`);
    }
  }
}

// ---------------
// Usage of the Bookstore class
// ---------------

const bookstore = new Bookstore();

bookstore.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic", 14.99, 10);
bookstore.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction", 12.99, 20);
bookstore.removeBook("To Kill a Mockingbird");
bookstore.searchBooks("Gatsby");
bookstore.registerUser("user1", "1234");
bookstore.loginUser("user1", "password");

// ... More code beyond this point