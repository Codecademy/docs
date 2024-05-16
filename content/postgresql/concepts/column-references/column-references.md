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

In PostgreSQL, **"column-reference"** simply means the referencing of a column within a table. It is a very important **concept** in relational databases. As we are aware that a table consists of rows and columns, and each column symbolizes a particular element of data/information that can be manipulated to get results. Understanding column reference is a very useful skill for data scientists, analysts and administrators to efficiently query and analyse data.




## Syntax

The syntax for declaring column reference for Postgresql is almost alike with that of SQL(Structured Query Language) as they share some attributes and patterns. Kindly go through the list below to be able to access a column reference in PostgreSQL:

  1. SELECT Statement: 
  To get data from specific columns in a table:
  
    
            SELECT column3, column2, ...
            FROM table_name;
    
  2. INSERT Statement:
  To specify the columns in which data would be executed:

 
            INSERT INTO table_name (column3, column7, ...)
            VALUES (value3, value7, ...);
 
  3. UPDATE Statement:
  To indicate which columns will be updated and their new values:

            UPDATE table_name
            SET column4 = value4, column9 = value9, ...
            WHERE condition;

  4. DELETE Statement:
  To specify the columns in deleting roles:


            DELETE FROM table_name
            WHERE condition;

 
 5. ALTER TABLE Statement:
    To add, modify, or remove columns in a table.

    a. Add a new column

            ALTER TABLE table_name
            ADD column_name data_type;
   
b. Modify an existing column.
 
 
           ALTER TABLE table_name
           ALTER COLUMN column_name TYPE new_data_type;
 
 c. Drop a column
 
           ALTER TABLE table_name
           DROP COLUMN column_name;

 
 
 6. CREATE TABLE Statement:
    To define columns when creating a table.

    
           CREATE TABLE table_name (
             column1 data_type,
             column2 data_type,
    
            );

  
## Example

This is an example showing how to use column references in PostgreSQL. A table is initially created and column names are given together with data types to input the right data. It also shows how to update data through column references.

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















