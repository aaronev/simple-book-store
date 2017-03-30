const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/bookstore';
const db = pgp(connectionString);

function getAllBooks() {
	return db.any('SELECT * FROM books') 
}

function addBook(title, author, genre) {
	return db.none('INSERT INTO bookstore(title, author, genre) VALUES(${title}, ${author}, ${genre})')
}

function updateBook(bookId, title, author, genre) { //test if it works there were cases where it didn't
	return  db.none(
		'UPDATE books SET title = ${title}, author = ${author}, genre = ${genre} WHERE id = $1', bookId
		)
} 

function findBook(bookId) {
	return db.one('SELECT * FROM books WHERE id = $1', bookId)
}

function deleteBook(bookId) {
	return db.none('DELETE FROM bookstore WHERE id = $1', bookId)
}

module.exports = {
	getAllBooks, 
	addBook,
	updateBook,
	findBook, 
	deleteBook 
};