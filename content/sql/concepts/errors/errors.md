---
Title: 'Errors' 
Description: 'In SQL, an error refers to a problem that prevents the successful execution of a query or generates incorrect results.' 
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Aggreagte Functions '
  - 'Alias
  - 'Arithematic'
  - 'CRUD'
  - 'Database'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**Errors** in SQL occur when a query or operation fails to execute properly or generates incorrect results.

There are mainly three types of SQL errors:

## Syntax Errors

A syntax error occurs when the SQL query does not follow any correct syntax or linguistic rules like the use of wrong keywords, or wrong clauses.

## Runtime Errors

A runtime error occurs when the execution of a query takes place which is why it is named as runtime error. These errors can occur due to performing illegal operations like division by zero or.

## Logical Errors

Logical errors arise when the query executes successfully but produces an incorrector unintended results due to logical flaws in the query. 

## Syntax

The below syntax shows the demonstration of how a syntactical error occurs in SQL. Here the word `FORM` causes a syntactical error.

```pseudo 
SELECT * FORM users; 
```
### Example

```sql
-- Create table with a UNIQUE constraint
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);

-- Insert data with syntax error
INSERT INTO users (id, email VALUES (1, 'alice@example.com'); -- Error: Missing closing parenthesis

-- Insert data with unique constraint violation
INSERT INTO users (id, email) VALUES (2, 'alice@example.com'); -- Error: Duplicate email

-- Data type mismatch
INSERT INTO users (id, email) VALUES ('three', 'bob@example.com'); -- Error: 'id' should be an integer


```


  


