-- Week 4 Day 1. This is full SQL with creating tables and inserting data
-- Day 2 look further.

-- CREATE TABLE items (
-- 	id serial PRIMARY KEY,
-- 	item_name VARCHAR(30),
-- 	price FLOAT
-- );

-- CREATE TABLE customers (
-- 	id serial PRIMARY KEY,
-- 	first_name VARCHAR(15),
-- 	last_name VARCHAR(15)
-- );

-- INSERT INTO items (item_name, price)
-- VALUES (
-- 	'Small Desk',
-- 	100
-- ),
-- (
-- 	'Large Desk',
-- 	300
-- ),
-- (
-- 	'Fan',
-- 	80
-- );

-- INSERT INTO customers(first_name, last_name)
-- VALUES (
-- 	'Greg',
-- 	'Jones'
-- ),
-- (
-- 	'Sandra',
-- 	'Jones'
-- ),
-- (
-- 	'Scott',
-- 	'Scott'
-- ),
-- (
-- 	'Trevor',
-- 	'Green'
-- ),
-- (
-- 	'Melanie',
-- 	'Johnson'
-- );

-- SELECT * FROM items;
-- SELECT * FROM customers;

-- SELECT * FROM items
-- 	WHERE price > 80;

-- SELECT * FROM items
-- 	WHERE price <= 300;

-- SELECT * FROM customers
-- 	WHERE last_name = 'Smith';

-- SELECT * FROM customers
-- 	WHERE last_name = 'Jones';

-- SELECT * FROM customers
-- 	WHERE first_name != 'Scott';



--   Week 4 Day 2 Exercises XP  --

SELECT * FROM items ORDER BY price ASC;

SELECT * FROM items
	WHERE price >= 80
	ORDER BY price DESC;

SELECT first_name, last_name FROM customers ORDER BY first_name LIMIT 3;

SELECT last_name FROM customers ORDER BY last_name DESC;


--   Week 4 Day 2 Exercises XP, DVD Rental  --


-- 1
SELECT * FROM customer;

-- 2
SELECT first_name ||' '|| last_name AS full_name FROM customer;

-- 3
SELECT DISTINCT create_date FROM customer;

-- 4
SELECT * FROM customer ORDER BY first_name DESC;

-- 5
SELECT film_id, title, description, release_year, rental_rate
	FROM film
	ORDER BY rental_rate;

-- 6
SELECT customer.first_name, customer.last_name, address.address, address.phone, address.district FROM customer
    INNER JOIN address
	ON customer.address_id = address.address_id
	WHERE address.district = 'Texas';

-- 7
SELECT * FROM film
	WHERE film_id in (15, 150);

-- 8
SELECT film_id, title, description, length, rental_rate FROM film
	WHERE title = 'Pulp Fiction';

-- 9
SELECT film_id, title, description, length, rental_rate FROM film
	WHERE title ILIKE 'Pu%';

-- 10
SELECT * FROM film ORDER BY replacement_cost, film_id ASC LIMIT 10;

-- 11
SELECT * FROM film ORDER BY replacement_cost, film_id ASC OFFSET 10
	FETCH FIRST 10 ROWS ONLY;

-- 12
SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment
	ON payment.customer_id = customer.customer_id
ORDER BY customer.customer_id

-- 13
SELECT * FROM film
WHERE film_id NOT IN (SELECT film_id FROM inventory)
ORDER BY film_ID;

-- 14
SELECT city.city, country.country FROM city
INNER JOIN country
ON country.country_id = city.country_id
ORDER BY city.city ASC;

-- 15
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment
	ON payment.customer_id = customer.customer_id
ORDER BY payment.staff_id;