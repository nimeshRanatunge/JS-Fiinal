//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}



//UI Constructor
function UI() {}

UI.prototype.addbookToList = function(book) {
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    //Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
}

//Clear fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listenrs
document.getElementById('book-form').addEventListener('submit', 
    function(e){

        //get from values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

        //instantiate book
        const book = new Book(title, author, isbn);

        //instantiate UI
        const ui = new UI();

        //add book to list
        ui.addbookToList(book);

        ui.clearFields();

        e.preventDefault();
    }
);