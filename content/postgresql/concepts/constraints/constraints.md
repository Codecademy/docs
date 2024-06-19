---
Title: 'Constraints'
Description: 'Constraints are specific conditions applied to database tables and/or columns in PostgreSQL.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'PostgreSQL'
  - 'Database'
  - 'Tables'
  - 'Data'
CatalogContent:
  - 'getting-started-off-platform-for-data-science'
  - 'paths/design-databases-with-postgresql'
---

In PostgreSQL, **constraints** are specific conditions applied to database tables and/or columns. They help in ensuring data integrity, consistency, and accuracy as well as quality and reliability of the stored data. The constraint rules define limits for the insertion, updation, and deletion of the data.

## Check Constraints

Check constraints are conditions that must be fulfilled for all the rows in the table:

```sql
CREATE TABLE students (
  student_id SERIAL PRIMARY KEY,
  age INT,
  -- Checking if the age lies between 18 and 45
  CONSTRAINT age_test CHECK (age BETWEEN 18 AND 45)
  );
```

## Not-Null Constraints

Not-null constraints restrict a column from assuming the null value:

```sql
CREATE TABLE students (
  student_id SERIAL PRIMARY KEY,
  age INT NOT NULL,
  subject VARCHAR(100) NOT NULL
  );
```

## Unique Constraints

Unique constraints ensure that all the values in a column occur only once in all the rows:

```sql
CREATE TABLE food (
  food_id SERIAL PRIMARY KEY,
  food_name VARCHAR(100) UNIQUE
  );
```

## Primary Keys

Primary keys are unique identifiers of a single row in the table:

```sql
CREATE TABLE food (
  food_id SERIAL PRIMARY KEY,
  food_name VARCHAR(50),
  price INT
  );
```

## Foreign Keys

Foreign keys specify a column in the table whose values must match the values in a row in another table:

```sql
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  restaurant_visitor_id INT,
  -- Link to 'restaurant_visitors' table
  FOREIGN KEY (restaurant_visitor_id) REFERENCES restaurant_visitors(visitor_id)
  );
```

## Exclusion Constraints

Exclusion constraints are special constraints that ensure that two rows in the table do not fulfill at least one condition at the same time. This is important to prevent ranges from overlapping:

```sql
CREATE TABLE meetings (
  meeting_id SERIAL PRIMARY KEY,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  --tsrange (short for 'timestamp range')
  EXCLUDE USING GIST (tsrange(start_time, end_time) WITH <>)
);
```

Here are some successful insertions:

```sql
INSERT INTO meetings (start_time, end_time)
VALUES
  ('2024-05-24 09:00:00', '2024-05-24 11:30:00');
  ('2024-05-24 09:00:00', '2024-05-24 11:30:00');
```

Here is a failed insertion:

```sql
INSERT INTO meetings (start_time, end_time)
VALUES
  ('2024-05-24 09:30:00', '2024-05-24 11:30:00');
```
