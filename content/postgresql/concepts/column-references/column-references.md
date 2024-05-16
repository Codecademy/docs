---
Title: 'Column References'
Description: 'Allow developers to retrieve column names and relevant data from a table.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'PostgreSQL'
  - 'Database'
  - 'Data'
CatalogContent:
  - 'getting-started-off-platform-for-data-science'
  - 'paths/design-databases-with-postgresql'
---

In PostgreSQL, **column references** is an important concept that allows developers to retrieve column names and relevant data from a table. Understanding this concept can be useful for data scientists, analysts and administrators as it helps them to query and analyze data efficiently.

## Syntax

The process for referencing columns in PostgreSQL matches a lot with that of SQL (Structured Query Language) as they share some attributes and patterns. Specifically, there are some statements that can be used to reference columns in PostgreSQL.

### SELECT

The `SELECT` statement is used to get data from specific columns in a table:

```pseudo
SELECT column3, column2, ...
FROM table_name;
```

### INSERT

The `INSERT` statement is used to specify the columns to which data is to be inserted:

```pseudo
INSERT INTO table_name (column3, column7, ...)
VALUES (value3, value7, ...);
```

### UPDATE

The `UPDATE` statement is used to specify the columns to be updated with new data:

```pseudo
UPDATE table_name
SET column4 = value4, column9 = value9, ...
WHERE condition;
```

### DELETE

The `DELETE` statement is used to specify the columns to be deleted:

```pseudo
DELETE FROM table_name
WHERE condition;
```

### ALTER TABLE

The `ALTER TABLE` statement is used to add, modify or remove columns from a table.

Here is the syntax for adding a column to a table:

```pseudo
ALTER TABLE table_name
ADD column_name data_type;
```

The following syntax shows how to modify a column in a table:

```pseudo
ALTER TABLE table_name
ALTER COLUMN column_name TYPE new_data_type;
```

The syntax for removing a column from a table is following:

```pseudo
ALTER TABLE table_name
DROP COLUMN column_name;
```

### CREATE TABLE

The `CREATE TABLE` statement is used to define columns while creating a table:

```pseudo
CREATE TABLE table_name (
column1 data_type,
column2 data_type,
);
```

  
## Example

The following example demonstrates the usage of column references in PostgreSQL:

```
// Create a table to store information about some passengers in a bus.

CREATE TABLE bus(
    first_name VARCHAR(80),
  	last_name VARCHAR(80),
  	occupation VARCHAR(80),
  	starting_point VARCHAR(80),
  	destination_point VARCHAR(80),
  	ticket_price INTEGER,
  	duration_in_minutes BIGINT,
  	type_of_payment VARCHAR(90),
  	age INTEGER,
  	next_of_kin VARCHAR(100),
  	date_of_payment DATE  
  );

// To update information to the column names given.
    
INSERT INTO bus (first_name, last_name, occupation, starting_point, destination_point, ticket_price, duration_in_minutes, type_of_payment, age, next_of_kin, date_of_payment )
VALUES 
    ('Ikechukwu', 'Ogumba', 'Student', 'Dei-Dei', 'Kubwa', 200, 15, 'Card Payment', 22, 'William Ogumba', '2024-04-20'),
    ('John', 'Snow', 'Plumber', 'Dei-Dei', 'Wuse Junction', 500, 40, 'Card Payment', 30, 'Micheal Bolton', '2024-04-20'),
 	('Barry', 'Hickler', 'Banker', 'Dei-Dei', 'Berger', 700, 60, 'Cash Payment', 39, 'James Rashford', '2024-04-20'),
    ('Jenny', 'Simpson', 'Therapist', 'Dei-Dei', 'Maitama', 800, 80, 'Card Payment', 30, 'Julie Simpson', '2024-04-20'),
    ('Junior', 'Kelechukwu', 'Student', 'Dei-Dei', 'Kubwa', 200, 15, 'Card Payment', 40, 'Matthew Kelechukwu', '2024-04-20'),
    ('Folakemi', 'Abimbola', 'Pastor', 'Dei-Dei', 'Wuse Junction', 500, 40, 'Cash', 30, 'Kehinde Abimbola', '2024-04-20'),
 	('Tochukwu', 'Okafor', 'Athlete', 'Dei-Dei', 'Berger', 700, 60, 'Card Payment', 39, 'Duru Okafor', '2024-04-20'),
    ('Taiwo', 'Kehinde', 'Trader', 'Dei-Dei', 'Kubwa', 200, 15, 'Card Payment', 50, 'Adebayo Kehinde', '2024-04-20');
    
 // Showing concept in use.
 // We forgot to add the gender of the passengers in the bus.
 // To add data to the gender column, we can reference it and assign different string value to it.
 
ALTER TABLE bus
ADD gender VARCHAR(10);

// We have now created a new column named gender.
//We can update multiple rows at once with a CASE expression.


UPDATE bus
SET gender = 'Male'
WHERE first_name = 'Ikechukwu';



// This will update the gender column.
UPDATE bus
SET gender = 
    CASE
        WHEN last_name = 'Snow' THEN 'Male'
        WHEN last_name = 'Hickler' THEN 'Male'
        WHEN last_name = 'Kelechukwu' THEN 'Male'
        WHEN last_name = 'Okafor' THEN 'Male'
        WHEN last_name = 'Kehinde' THEN 'Male'
        ELSE 'Female'
    END;

// We can sum up a column name data if we are looking for more details.

SELECT SUM(ticket_price)
FROM bus;
 
//This will give the output of the total sum of the ticket_price sold.

```















