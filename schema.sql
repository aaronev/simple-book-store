DROP TABLE IF EXISTS books;
CREATE TABLE books(
	ID SERIAL PRIMARY KEY,
	title VARCHAR(60),
	author VARCHAR(40),
	genre VARCHAR(20)
);

COPY books FROM '/Users/a02100/Projects/lg/bkstrmain/simple-book-store/books.csv' DELIMITER ',' CSV HEADER;
