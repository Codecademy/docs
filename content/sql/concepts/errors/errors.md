---
Title: 'Errors'
Description: 'An error refers to a problem that prevents the successful execution of a query or generates incorrect results.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Aggregate Functions'
  - 'Alias'
  - 'Arithmetic'
  - 'CRUD'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**Errors** in SQL occur when a query or operation fails to execute properly or generates incorrect results.

There are mainly three types of SQL errors. Each of them are discussed below.

## Syntax Errors

A syntax error occurs when a SQL query does not follow the correct syntax or violate any linguistic rules, like the use of wrong keywords or wrong clauses.

## Runtime Errors

A runtime error occurs when the execution of a query takes place. This is why it is named as runtime error. These errors can occur due to performing inapplicable operations, like division by zero.

## Logical Errors

Logical errors arise when a query executes successfully, but produces an incorrect or unintended result due to the existence of logical flaws in it.

## Syntax

The below syntax demonstrates how a syntactical error occurs in SQL. Here the word `FORM` causes a syntactical error:

```pseudo
SELECT * FORM users;
```

## Example

The following example shows how different errors arise in SQL:

```sql
-- Create a table with a UNIQUE constraint
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
