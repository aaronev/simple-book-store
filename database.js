const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres:/localhost:5432/bookstore'

const client = new pg.Client(connectionString);
client.connect()
const query = client.query(
	'CREATE TABLE books(title TEXT, author TEXT VARCHAR(40), genre TEXT);'
	)