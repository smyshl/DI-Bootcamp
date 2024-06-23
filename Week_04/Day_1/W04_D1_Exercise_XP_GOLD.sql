-- CREATE TABLE students (
-- 	id serial PRIMARY KEY,
-- 	last_name VARCHAR(20),
-- 	first_name VARCHAR(15),
-- 	birth_date date
-- );

-- INSERT INTO students (first_name, last_name, birth_date)
-- 	VALUES (
-- 	'Marc',
-- 	'Benichou',
-- 	'1998-11-02'
-- 	),
-- 	(
-- 	'Yoan',
-- 	'Cohen',
-- 	'2010-12-03'
-- 	),
-- 	(
-- 	'Lea',
-- 	'Benichou',
-- 	'1987-07-27'
-- 	),
-- 	(
-- 	'Amelia',
-- 	'Dux',
-- 	'1996-04-07'
-- 	),
-- 	(
-- 	'David',
-- 	'Grez',
-- 	'2003-06-04'
-- 	),
-- 	(
-- 	'Omer',
-- 	'Simpson',
-- 	'1980-10-03'
-- 	-- );

-- SELECT * FROM students;

-- SELECT first_name, last_name FROM students;

-- SELECT first_name, last_name FROM students
-- 	WHERE id = 2;

-- SELECT first_name, last_name FROM students
-- 	WHERE last_name = 'Benichou' and first_name = 'Marc';

-- SELECT first_name, last_name FROM students
-- 	WHERE last_name = 'Benichou' or first_name = 'Marc';

-- SELECT first_name, last_name FROM students
-- 	WHERE first_name ILIKE '%a%';

-- SELECT first_name, last_name FROM students
-- 	WHERE first_name ILIKE 'a%';

-- SELECT first_name, last_name FROM students
-- 	WHERE first_name ILIKE '%a';

-- SELECT first_name, last_name FROM students
-- 	WHERE first_name ILIKE '%a_';

-- SELECT first_name, last_name FROM students
-- 	WHERE id = 1 OR id = 3;

-- SELECT * FROM students
-- 	WHERE birth_date >= '2000-01-01';

SELECT first_name, last_name, birth_date FROM students
	ORDER BY last_name LIMIT 4;

SELECT first_name, last_name, birth_date FROM students
	WHERE birth_date = (SELECT MAX(birth_date) FROM students);

SELECT first_name, last_name, birth_date FROM students
	LIMIT 3 OFFSET 2;