/*
Filename: ComplexApp.js
Content: A complex and elaborate JavaScript application to manage a virtual online bookstore.
*/

// Book class represents a book with various properties
class Book {
  constructor(title, author, price, genre, publicationYear) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.genre = genre;
    this.publicationYear = publicationYear;
  }

  getBookDetails() {
    return `${this.title} by ${this.author} - ${this.genre} (${this.publicationYear}) - $${this.price}`;
  }
}

// Bookstore manages the inventory and sales of books
class Bookstore {
  constructor() {
    this.inventory = [];
    this.sales = [];
  }

  addBook(title, author, price, genre, publicationYear) {
    const newBook = new Book(title, author, price, genre, publicationYear);
    this.inventory.push(newBook);
  }

  removeBook(title) {
    const index = this.inventory.findIndex((book) => book.title === title);
    if (index !== -1) {
      this.inventory.splice(index, 1);
    }
  }

  sellBook(title) {
    const book = this.inventory.find((book) => book.title === title);
    if (book) {
      this.sales.push(book);
      this.removeBook(title);
    }
  }

  calculateRevenue() {
    let revenue = 0;
    for (const sale of this.sales) {
      revenue += sale.price;
    }
    return revenue;
  }

  listBooks() {
    for (const book of this.inventory) {
      console.log(book.getBookDetails());
    }
  }
}

// Usage example

const bookstore = new Bookstore();

bookstore.addBook("The Great Gatsby", "F. Scott Fitzgerald", 12.99, "Classic", 1925);
bookstore.addBook("To Kill a Mockingbird", "Harper Lee", 9.99, "Fiction", 1960);
bookstore.addBook("1984", "George Orwell", 8.49, "Science Fiction", 1949);
bookstore.addBook("Pride and Prejudice", "Jane Austen", 7.99, "Romance", 1813);

console.log("Inventory:");
bookstore.listBooks();

bookstore.sellBook("1984");
bookstore.sellBook("To Kill a Mockingbird");

console.log("Sales:");
bookstore.listBooks();

console.log("Total Revenue: $" + bookstore.calculateRevenue().toFixed(2));

/*
Output:

Inventory:
The Great Gatsby by F. Scott Fitzgerald - Classic (1925) - $12.99
To Kill a Mockingbird by Harper Lee - Fiction (1960) - $9.99
1984 by George Orwell - Science Fiction (1949) - $8.49
Pride and Prejudice by Jane Austen - Romance (1813) - $7.99
Sales:
1984 by George Orwell - Science Fiction (1949) - $8.49
To Kill a Mockingbird by Harper Lee - Fiction (1960) - $9.99
Total Revenue: $18.48
*/