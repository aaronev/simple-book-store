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
	return  db.one(
		'UPDATE books SET title = $1, author = $2, genre = $3 WHERE id = $4 returning *', [title, author, genre, bookId]
		)//to look up data
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