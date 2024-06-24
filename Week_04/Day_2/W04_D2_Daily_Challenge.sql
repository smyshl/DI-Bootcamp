-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- );

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar');

-- CREATE TABLE SecondTab (
--     id integer 
-- );

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL);


-- Q1. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );
 
-- A1. The OUTPUT will be all rows from FirstTab except row with id = Null
-- Check - NO, the output isn't rows, it's count. And I should be carefull with nulls.
-- NOT IN (NULL ) returns an undefined value and therefore no rows will be selected.
-- and COUNT will be 0.


-- Q2. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );

-- A2. The OUTPUT will be count of all rows from FirstTab except row with id = 5, i.e 3
-- Check - No, 2. Again null? OK


-- Q3. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );

-- A3. The OUTPUT will be count of all rows from FirstTab with id not in (5, Null)
-- So I think, that at this time it will be rows with id=6 and id=7 and count will be 2.
-- Check - No, 0. Why?
-- I think I figured it out. ft.id NOT IN (value1, value2) is equivalent to ft.id <> value1 AND value2.
-- value2 is Null and any comparison with null gives an undefined result,
-- so the query will not return any row and the count will be zero


-- Q4. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- A4. The OUTPUT will be 2. Because result of subquerry will be (5) and ft.id NOT IN (5) will return
-- two rows with id=6 and id=7 (ft.id=Null NOT IN (5) returns Null), so count will be 2.
-- Check - YEAH!!! Finally!