// class book 
class Book {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// class UI
class UI {
    addBookToList(book) {
        console.log(book);
        const list = document.getElementById('book-list');
        // create tr element
        const row = document.createElement('tr');
        // insert cols 
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        // create div
        const div = document.createElement('div');
        // add classes
        div.className = `alert ${className}`;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // timeout after 3 secs
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        //if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
        //}
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// local storage class
class Store {

    static getBooks() {
        let books;

        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();
        console.log(books);
        books.forEach(function(book){
            const ui = new UI;
            // add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBooks(isbn) {
        console.log(isbn);

        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books',JSON.stringify(books));
    }
}

// Dom Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks());

// Event Listeners for add book
document.getElementById('book-form').addEventListener('submit',
function(e){
    console.log('test');
    
    // Get form values 
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // Instantiate book    
    const book = new Book(title, author, isbn);
    
    const ui = new UI();
    console.log(ui);

    // validate 
    if(title === '' || author === '' || isbn === '') {
        //alert('Failed');
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);

        // add to ls
        Store.addBook(book);

        // show success
        ui.showAlert('Book Added!', 'success');

        ui.clearFields();
    }

    e.preventDefault();
});

// event listener for delete
document.getElementById('book-list').addEventListener('click', 
function(e){
    // instantiate ui
    const ui = new UI();
    
    if(e.target.className === 'delete') {
        // delete book
        ui.deleteBook(e.target);

        // remove from LS
        Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);

        // show message
        ui.showAlert('Book Removed!', 'success');
    }
    
    e.preventDefault();
});