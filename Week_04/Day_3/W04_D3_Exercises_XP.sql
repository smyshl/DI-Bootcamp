-- EXERCISE 1

SELECT name FROM language;

SELECT title, description, language.name FROM film
JOIN language ON language.language_id = film.language_id;

SELECT title, description, language.name FROM film
RIGHT JOIN language ON language.language_id = film.language_id;

CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30)
);

INSERT INTO new_film (name)
VALUES
('Inglorious Bastards'),
('Pulp Fiction'),
('Reservoir Dogs');

CREATE TABLE customer_review (
	review_id SERIAL NOT NULL PRIMARY KEY,
	film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE ON UPDATE CASCADE,
	language_id INTEGER REFERENCES language(language_id),
	title VARCHAR(100),
	score SMALLINT CHECK (score BETWEEN 1 AND 10),
	review_text VARCHAR,
	last_updated DATE
);

INSERT INTO customer_review (language_id, film_id, title, score, review_text, last_updated)
VALUES
((
	SELECT language_id FROM language
	WHERE name ILIKE '%Italian%'
),(
	SELECT id FROM new_film
	WHERE name ILIKE '%dogs%'
), 'review title', 4, 'review text', CURRENT_DATE),
(
	(SELECT language_id FROM language
	WHERE name ILIKE '%French%'
),(
	SELECT id FROM new_film
	WHERE name ILIKE '%pulp%'
), 'review title', 6, 'review text', CURRENT_DATE);

DELETE FROM new_film WHERE name ILIKE '%pulp%';



-- EXERCISE 2

-- 1
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name ILIKE '%FREN%')
WHERE film_id BETWEEN 1 AND 10;

-- 2
-- Which foreign keys (references) are defined for the customer table?
-- How does this affect the way in which we INSERT into the customer table?
-- A:
-- customer table has a reference to address table by address_id field (foreign key)
-- to insert a row in the customer table we must use adress_id which exists in address table

-- 3
DROP TABLE customer_review;
it dropped without any extra checking

-- 4
SELECT COUNT(return_date) FROM rental
WHERE return_date < CURRENT_DATE;

-- 5
SELECT film.film_id, film.title, film.replacement_cost FROM film
JOIN inventory
	ON inventory.film_id = film.film_id
JOIN rental
	ON rental.inventory_id = inventory.inventory_id
WHERE rental.return_date < CURRENT_DATE
ORDER BY film.replacement_cost DESC LIMIT 30;

-- 6
SELECT * FROM film
JOIN film_actor
ON film_actor.film_id = film.film_id
JOIN actor
ON actor.actor_id = film_actor.actor_id
WHERE description ILIKE '%sumo wrestler%' AND
	actor.first_name ILIKE '%Penelope%' AND
	actor.last_name ILIKE '%Monroe%';

SELECT * FROM film
JOIN film_category
ON film_category.film_id = film.film_id
JOIN category
ON category.category_id = film_category.category_id
WHERE category.name = 'Documentary' AND
	length < 60 AND
	rating = 'R';

SELECT * FROM film
JOIN inventory
ON inventory.film_id = film.film_id
JOIN rental
ON rental.inventory_id = inventory.inventory_id
JOIN customer
ON customer.customer_id = rental.customer_id
JOIN payment
ON payment.rental_id = rental.rental_id
WHERE customer.first_name ILIKE '%Matthew%' AND
	customer.last_name ILIKE '%Mahan%' AND
	payment.amount > 4 AND
	rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT * FROM film
JOIN inventory
ON inventory.film_id = film.film_id
JOIN rental
ON rental.inventory_id = inventory.inventory_id
JOIN customer
ON customer.customer_id = rental.customer_id
WHERE customer.first_name ILIKE '%Matthew%' AND
	customer.last_name ILIKE '%Mahan%' AND
	(title ILIKE '%boat%' OR description ILIKE '%boat%')
ORDER BY replacement_cost DESC
LIMIT 1;
