---- Part I

CREATE TABLE customer (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR (20) NOT NULL
);

CREATE TABLE customer_profile (
	id SERIAL PRIMARY KEY,
	is_logged_in BOOLEAN DEFAULT FALSE,
	customer_id INT REFERENCES customer(id)
);

INSERT INTO customer (first_name, last_name)
VALUES 
	('John', 'Doe')
	('Jerome', 'Lalu'),
	('Lea', 'Rive');

INSERT INTO customer_profile (is_logged_in, customer_id)
VALUES
(TRUE, (SELECT id FROM customer WHERE first_name ILIKE 'John'));

INSERT INTO customer_profile (customer_id)
VALUES
((SELECT id FROM customer WHERE first_name ILIKE 'Jerome'));

SELECT first_name FROM customer
JOIN customer_profile
ON customer_profile.id = customer.id
WHERE customer_profile.is_logged_in = TRUE;

SELECT customer.first_name, customer_profile.is_logged_in FROM customer
LEFT JOIN customer_profile
ON customer_profile.id = customer.id;

SELECT COUNT(*) FROM customer
JOIN customer_profile
ON customer_profile.id = customer.id
WHERE customer_profile.is_logged_in = FALSE;

---- Part II

CREATE TABLE book (
	book_id SERIAL PRIMARY KEY,
	title VARCHAR(30) NOT NULL,
	author VARCHAR(30) NOT NULL
);

INSERT INTO book (title, author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

CREATE TABLE student (
	student_id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL UNIQUE,
	age INTEGER CHECK (age <= 15)
);

INSERT INTO student (name, age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

CREATE TABLE library (
	book_fk_id INTEGER REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_id INTEGER REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrowed_date DATE,
	PRIMARY KEY (book_fk_id, student_id)
);

INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES
((
	SELECT book_id FROM book
	WHERE title ILIKE 'Alice In Wonderland'
),(
	SELECT student_id FROM student
	WHERE name ILIKE 'John'
), '2022-02-15'),
	((
	SELECT book_id FROM book
	WHERE title ILIKE 'To kill a mockingbird'
),(
	SELECT student_id FROM student
	WHERE name ILIKE 'Bob'
), '2021-03-03'),
	((
	SELECT book_id FROM book
	WHERE title ILIKE 'Alice In Wonderland'
),(
	SELECT student_id FROM student
	WHERE name ILIKE 'Lera'
), '2021-05-23'),
	((
	SELECT book_id FROM book
	WHERE title ILIKE 'Harry Potter'
),(
	SELECT student_id FROM student
	WHERE name ILIKE 'Bob'
), '2021-08-12');

SELECT * FROM library;

SELECT name, book.title FROM student
JOIN library ON library.student_id = student.student_id
JOIN book ON book.book_id = library.book_fk_id;

SELECT AVG(age) FROM student
JOIN library ON library.student_id = student.student_id
JOIN book ON book.book_id = library.book_fk_id
	WHERE book.title ILIKE 'Alice in Wonderland';

DELETE FROM student WHERE name ILIKE 'Lera';