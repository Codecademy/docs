---
Title: 'SQL Injections'
Description: 'SQL Injection is a technique to inject malicious code into a database.'
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
  - 'paths/design-databases-with-postgresql'
---

SQL Injection is a technique to inject unwanted code into a database. Malicious code can be sent to a database and run without permission. The result can be anything from bypassing login to data theft or corruption of a databse. The code is typically entered when a website or application asks for user input. It is important to protect your database by making sure your database does not take user input as a command to be run. Testing of your database can show any vulnarabilites to SQL Injection. Also, use SQL parameters to protect from injection, allowing you to have more control over the values being passed. This will ensure SQL will treat the data as text and not as a command to be executed.

## Examples

## Retrieving Data

In this example, there is a form that asks for your `User ID`. This form will run this SQL command to check if the user exists:

```sql
SELECT * FROM users WHERE UserID = 'input from user'
```

Now if a user enters `1 OR 1=1`, then the user injecting the code will be able to access all the UserId's because `1=1` will always execute as `true`.

## Dropping a Table

This example will send a command to the database to drop a table.

```sql
SELECT * FROM Users WHERE UserID = "input from user"
```

If a user enters `1; DROP TABLE Projects` This will first find the user with the UserId = 1, then it will run what it believes to be the next command `DROP Table Projects` which will delete the `Projects` table.
