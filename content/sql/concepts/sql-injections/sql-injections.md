---
Title: 'SQL Injections'
Description: 'SQL injection is a technique used to inject malicious code into a database.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'SQLite'
  - 'MySQL'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

SQL injection is a technique used to introduce unwanted code into a database. This code is malicious and can be sent to a database and run without permission. The result can be anything from bypassing login to data theft or corruption of a database. The code is usually entered when a website or application asks for user input.

To prevent SQL injection, databases should not take user input as a command to be run. Running tests across a database could also show any vulnerabilities. Also, parameters can be used to protect against SQL injection, allowing for more control over the values being passed. This will ensure SQL will treat the data as text and not as a command to be executed.

## Examples

## Retrieving Data

In this example, there is a form that asks for your `User ID`. This form will run this SQL command to check if the user exists:

```sql
SELECT * FROM users WHERE UserID = 'input from user'
```

Now if a user enters `1' OR '1'='1`, then the SQL command becomes `SELECT * FROM users WHERE UserID = '1' OR '1'='1'`. The user injecting the code will be able to access all the UserID's because `1=1` will always execute as `true`.

## Dropping a Table

This example will send a command to the database to drop a table.

```sql
SELECT * FROM Projects WHERE UserID = 'input from user'
```

If a user enters `1'; DELETE FROM Projects WHERE '1'='1` This will first find the user with the UserId = 1, then it will run what it believes to be the next command `DELETE FROM Projects WHERE '1'='1'` which will delete all rows from the `Projects` table.

## Ways to Prevent SQL Injection

Techniques to keep your database safe:
  - Be aware of SQL Injection techniques
  - Set up a filter for user input
  - Treat user input as untrusted
  - Use parameterized queries
