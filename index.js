const express = require('express')
const app = express()
const queries = require('./queries')
const bodyParser = require('body-parser')
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function (req, res, next) {
  queries.getAllBooks()
  .then(books => {
    res.render(
      'index',
      { title: 'Simple Book Store', books: books})
  })
  .catch(next)
})


app.post('/addBook', (req, res, next) => {
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

app.post('/', (req, res, next) => {
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
  .catch(next)
})
app.get('/books/edit/:bookId', (req, res, next) => {
  let bookId = req.params
  res.render('editForm', bookId)
  // res.json(bookId)
})

app.get('/testing', (req, res) => {
  app.put('/testing/:bookId', (req, res) => {
    res.send('hello World')
  })
})

app.post('/bookDetail/:bookId', (req, res, next) => {
  let {bookId} = req.params
  let {title, author, genre} = req.body
  queries.updateBook(bookId, title, author, genre)
  .then(function (books) {
    res.status(200)
    .json({
      status: 'Updated',
      books: books,
      message: 'Thank you for updating this book.'
    })
  })
  .catch(next)
})

app.delete('/book', (req, res) => {
  let {bookId} = req.params
  let {title, author, genre} = req.body
  queries.deleteBook(bookId)
  .then(function (books) {
    res.status(200)
    .json({
      status: 'Deleted',
      books: books,
      message: 'Thank you for deleting this book.'
    })
  })
})












