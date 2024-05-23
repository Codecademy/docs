---
Title: 'constraints'
Description: 'Constraints are defined for tables or columns in PostgreSQL. Constraints can be used to control data in order to define limits for inserting, updating and deleting data.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Constraints'
  - 'Database'
  - 'PostgreSQL'
CatalogContent:
  - 'getting-started-off-platform-for-data-science'
  - 'paths/design-databases-with-postgresql'
  - 'paths/computer-science'
---
In PostgreSQL, **constraints** are conditions applied to database tables and/or columns. Contraints help to ensure data integrity, consistency and accuracy as well as quality and reliability of the stored data. The constraint rules define limits for insertion, updating and deleting of data. There are different constraint types.
## Check Constraints
- A check constraint is a condition that must be fulfilled in all rows of the table.
```sql
--Example:
CREATE TABLE students (
  student_id SERIAL PRIMARY KEY,
  age INT,
  --Is age between 18 and 45?
  CONSTRAINT age_test CHECK (age BETWEEN 18 AND 45)
  );
```
## Not-Null Constraints
- A Not-Null constraint do not allow any null values inside a column.
```sql
--Example:
CREATE TABLE students (
  student_id SERIAL PRIMARY KEY,
  age INT NOT NULL,
  subject VARCHAR(100) NOT NULL,
  );
```
## Unique Constraints
- A Unique constraints ensures that all values in the column only occur once (uniqueness).
```sql
--Example:
CREATE TABLE food (
  food_id SERIAL PRIMARY KEY,
  food_name VARCHAR(100) UNIQUE,
  );
```
## Primary Keys
- A Primary Key is the unique identifier of a single row in a table
```sql
--Example:
CREATE TABLE food (
  food_id SERIAL PRIMARY KEY,
  food_name VARCHAR(50),
  price INT
  );
```
## Foreign Keys
- A Foreign Key is a link to the Primary Key Column of another table.
```sql
--Example:
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  restaurant_visitor_id INT,
  -- Link to restaurant_visitors table
  FOREIGN KEY (restaurant_visitor_id) REFERENCES restaurant_visitors(visitor_id)
  );
```
## Exclusion Constraints
- An Exclusion constraint is a special constraint that ensures that two rows in a table do not fulfill a condition at the same time. This is important to prevent ranges from overlapping.
```sql
--Example:
CREATE TABLE meetings (
  meeting_id SERIAL PRIMARY KEY,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  --tsrange (short for “timestamp range”)
  EXCLUDE USING GIST (tsrange(start_time, end_time) WITH &&)
);
--successfull insert:
INSERT INTO meetings (start_time, end_time)
VALUES
  ('2024-05-24 09:00:00', '2024-05-24 11:30:00');

--fail insert:
INSERT INTO meetings (start_time, end_time)
VALUES
  ('2024-05-24 09:30:00', '2024-05-24 11:30:00');
```
> **Note:** Please also visit the official PostgreSQL Documentation under the search term "constraints": https://www.postgresql.org/docs/current/ddl-constraints.html.
