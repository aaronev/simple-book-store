DROP TABLE IF EXISTS books;
CREATE TABLE books(
	ID SERIAL UNIQUE,
	title VARCHAR(60),
	author VARCHAR(40),
	genre VARCHAR(20)
);

COPY books FROM '/Users/aaronvillanueva/Desktop/simple-book-store/books.csv' DELIMITER ',' CSV HEADER;
