DROP TABLE IF EXISTS books;
CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR (60) NOT NULL,
    author VARCHAR (40),
    genre VARCHAR (20)
    );