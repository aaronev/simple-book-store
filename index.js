const express = require('express') 
const app = express() 
const queries = require('./queries')

app.listen(3000, function() {  
    console.log('Example app listening on port 3000!')
})

app.set('view engine', 'pug')

app.get('/', function (req, res) {  
  queries.getAllBooks() 
  .then(books => {
    res.render(
      'index',
      { title: 'Simple Book Store', books: books})
  })
})

// app.get('/', (req, res, next) => {
//   queries.getAllBooks()
// 	.then(function (books) {
// 		res.status(200)
// 		.json({
// 			status: 'success',
// 			books: books,
// 			message: 'We have these great books!'
// 		})
// 	})
// 	.catch(next)
// });

// post

app.post('/addBook', (req, res, next) => {
  console.log("HELLO!?!")
  console.log('Request Body', req.body)
  let {title, author, genre} = req.body
  queries.addBook(title, author, genre)
  .then(function () {
    res.status(201)
    .json({
      status: 'created',
      books: books,
      message: 'Thank you for adding a book to Simple Database.'
    })
  })
})  

app.get('books', (req, res, next) =>{
  queries.updateBook(bookId, title, author, genre)
  .then(function () {
    res.status(200)
    .json({
      status: 'Updates',
      books: books,
      message: ''
    })
  })
})












