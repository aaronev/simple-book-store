const express = require('express')
const app = express()
//const pgdb = require('')

var db

app.listen(process.env.PORT || 3000, function() {
	console.log('Example app listening on port 3000!')
})

app.get('/', function(req, res) {
	res.send('Hello World!')
})

pgdb.connect('psql://', (err, database) => {
	if (err) return console.log(err)
	db = database
	app.listen(process.env.PORT || 3000, () => {
		console.log('listening on', PORT)
	})
})

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
	db.collection('titles').find().toArray((err. result) => {
		if (err) return console.log(err)
			res.render('index.pug', {titles: result})
	})
})

app.post('/titles', (req, res) => {
	db.collection('titles').save(req.body, (err, result) => {
		if (err) return console.log(err)
		console.log('saved to database')
		res.redirect('/')
	})
})

app.put('/titles', (req, res) => {
	db.collection('titles')
	.findOneAndUpdate({title: 'Yoda'}, {
		replace(name: req.body.name, title: req.body.title)
		//sort: {_title: -1},
		//upsert: true
	})
})

app.delete('/quotes', (req, res) => {
	db.collection('quotes').findOneAndDelete({
		name: req.body.name}, (err, result) => {
			if (err) return res.send(500, err)
			res.send('A darth vador quote got deleted')
		}
	})
})

// function addBook() {
// 	//add to csv
// 	//if time to refactor add to data base/postgres
// }

// function deleteBook() {
// 	//remove books from database
// }

//function update() {
//
//}