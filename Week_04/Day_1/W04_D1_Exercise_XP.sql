CREATE TABLE items (
	id serial PRIMARY KEY,
	item_name VARCHAR(30),
	price FLOAT
);

CREATE TABLE customers (
	id serial PRIMARY KEY,
	first_name VARCHAR(15),
	last_name VARCHAR(15)
);

INSERT INTO items (item_name, price)
VALUES (
	'Small Desk',
	100
),
(
	'Large Desk',
	300
),
(
	'Fan',
	80
);

INSERT INTO customers(first_name, last_name)
VALUES (
	'Greg',
	'Jones'
),
(
	'Sandra',
	'Jones'
),
(
	'Scott',
	'Scott'
),
(
	'Trevor',
	'Green'
),
(
	'Melanie',
	'Johnson'
);

SELECT * FROM items;
SELECT * FROM customers;

SELECT * FROM items
	WHERE price > 80;

SELECT * FROM items
	WHERE price <= 300;

SELECT * FROM customers
	WHERE last_name = 'Smith';

SELECT * FROM customers
	WHERE last_name = 'Jones';

SELECT * FROM customers
	WHERE first_name != 'Scott';