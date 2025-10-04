---
Title: 'SQL Errors'
Description: 'Returns diagnostic messages when issues occur during SQL query execution and database operations.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Debugging'
  - 'Error Handling'
  - 'Errors'
  - 'SQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**SQL errors** are diagnostic messages returned by database management systems when issues occur during query execution or database operations. These errors provide information about what went wrong and help developers identify and resolve problems in their SQL statements or database configurations. SQL errors typically include an error code, a short description, and sometimes a detailed explanation.

## Types of SQL errors

SQL errors can be categorized into several main types based on their nature and when they occur during query processing:

- **Syntax errors** occur when SQL statements violate the rules of SQL grammar, including misspelled keywords, missing clauses, incorrect punctuation, or improper use of operators. These errors prevent the query from being parsed and executed by the database engine.

- **Runtime errors** happen during query execution and are often caused by issues like data type mismatches, division by zero operations, or attempts to perform invalid operations on the data. These errors occur after the query has been successfully parsed but fail during the actual execution phase.

- **Logical errors** arise when queries execute without raising an error message but produce incorrect results due to flaws in the query logic itself. These errors are often the most challenging to identify because the database system doesn't flag them as problems.

- **Constraint violations** occur when database operations violate established database constraints, such as unique constraints, foreign key constraints, or check constraints. These errors help maintain data integrity by preventing invalid data modifications.

- **Data type mismatch errors** happen when attempting to insert, update, or compare incompatible data types. For example, trying to insert a text string into a numeric column or comparing a date with an integer value.

- **System errors** are related to the database system infrastructure and can range from connection issues and authentication failures to more severe problems like database corruption, insufficient memory, or network connectivity problems.

## SQL Error Codes

SQL error codes are standardized numeric identifiers that specify the type of issue encountered during database operations. Different database systems use various error code ranges to categorize problems, from syntax errors to connection failures.

### Success and Warning Codes

| Error Code | Description                                                                              |
| ---------- | ---------------------------------------------------------------------------------------- |
| 0          | Successful execution of the SQL statement. No errors occurred.                           |
| 100        | No data found; used by some SQL databases to indicate that a query has returned no rows. |

### General Error Codes (-1 to -99)

This range includes various general SQL issues such as **syntax errors**, **data type mismatches**, and permission problems.

| Error Code | Description                                                                          |
| ---------- | ------------------------------------------------------------------------------------ |
| -1         | General SQL error; the specific issue is not defined.                                |
| -2         | Invalid SQL statement or syntax error in the SQL query.                              |
| -3         | Out of memory; the system could not allocate the required memory.                    |
| -4         | Database connection error; unable to establish or maintain a connection.             |
| -5         | Data type mismatch; trying to insert or process incompatible data types.             |
| -6         | Numeric overflow; value exceeds the storage capacity.                                |
| -8         | Constraint violation; such as a unique constraint or foreign key constraint failure. |
| -9         | Invalid operation; performing an operation that is not allowed.                      |
| -10        | Deadlock; two or more transactions are waiting for each other to release locks.      |
| -11        | Timeout; the operation took longer than the permitted time limit.                    |
| -12        | Data integrity issue; corruption or mismatch in data.                                |
| -13        | Invalid index; referring to a non-existent or incorrect index.                       |
| -14        | Unspecified SQL error; general error with no specific cause.                         |
| -15        | Authentication error; issues with user credentials or login.                         |
| -16        | Database not found; the specified database does not exist.                           |
| -17        | Query execution error; issues encountered during SQL query execution.                |

### Specific Feature Error Codes (-101 to -500)

This range includes more specific SQL error messages related to feature support, query execution, and data integrity.

| Error Code | Description                                                                           |
| ---------- | ------------------------------------------------------------------------------------- |
| -101       | Syntax error; the SQL statement contains incorrect syntax.                            |
| -102       | Incorrect or missing keyword in the SQL statement.                                    |
| -103       | Unexpected token; encountered an unrecognized or invalid character.                   |
| -104       | Column not found; attempting to access a non-existent column.                         |
| -105       | Table not found; specified table does not exist.                                      |
| -106       | Function or stored procedure not found; non-existent function or procedure.           |
| -107       | Invalid operation on an open cursor; operation not permitted.                         |
| -108       | Incorrect data length; data does not fit in the specified length.                     |
| -109       | Invalid constraint definition; issues with constraints in the database schema.        |
| -110       | Unsupported SQL feature; the SQL feature is not available in the current environment. |

## Example of Syntax SQL Error

This example demonstrates a common syntax error that occurs when SQL keywords are misspelled or used incorrectly.

```sql
-- Incorrect syntax with misspelled SELECT keyword
SELCT name, age FROM users WHERE age > 25;
```

The output of this code will be:

```shell
ERROR: syntax error at or near "SELCT"
LINE 1: SELCT name, age FROM users WHERE age > 25;
        ^
```

The error occurs because `SELCT` is not a valid SQL keyword. The correct statement should use `SELECT` instead. This type of **syntax error** is one of the most common SQL errors encountered by developers.

## Example 2: Table Not Found Error in SQL

This example shows what happens when referencing a table that doesn't exist in the database:

```sql
-- Attempting to query a non-existent table
SELECT product_name, price
FROM inventory
WHERE category = 'electronics';
```

The output of this code will be:

```shell
ERROR: relation "inventory" does not exist
LINE 2: FROM inventory
             ^
```

This **table not found error** occurs when the specified table name doesn't exist in the current database schema. Common causes include misspelled table names, incorrect database context, or attempting to access tables that haven't been created yet.

## Example 3: Data Type Mismatch Error in SQL

This example demonstrates an error that occurs when trying to insert incompatible data types into a column.

```sql
-- Creating a table with specific data types
CREATE TABLE employees (
  id INTEGER,
  name VARCHAR(50),
  hire_date DATE,
  salary DECIMAL(10,2)
);

-- Attempting to insert an incorrect data type into the 'id' column
INSERT INTO employees (id, name, hire_date, salary)
VALUES ('invalid_id', 'John Doe', '2024-12-15', 75000.00);
```

The output of this code will be:

```shell
ERROR: invalid input syntax for type integer: "invalid_id"
LINE 2: VALUES ('invalid_id', 'John Doe', '2024-13-45', 'high_salary');
                ^
```

This **data type mismatch error** occurs when a value being inserted doesn’t match the expected data type for its column. In this case, the `id` column expects an integer, but a string was provided, causing the query to fail before other values are evaluated.

## Frequently Asked Questions

### 1. What is error 805 in SQL code?

Error 805 is commonly seen in IBM DB2 systems. It usually means a required package or page wasn't found in the database — often due to missing table space, a broken index, or an issue with the execution environment.

### 2. What is SQL logic error?

A SQL logic error occurs when the structure of a query is valid but its logic is flawed. This might happen if you're referencing non-existent tables or columns, misusing functions, or violating query constraints.

### 3. What is the SQL error?

`SQLError()` is a generic way to refer to an error thrown by a database system when a query fails. It often includes details like an error code, message, and sometimes a trace of what caused the failure. It’s commonly seen in environments like Web SQL (JavaScript) or abstracted in database libraries.
