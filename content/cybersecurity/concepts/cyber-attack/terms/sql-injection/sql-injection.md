---
Title: 'SQL Injection'
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

**SQL injection** is a technique used to introduce unwanted code into a [SQL](https://www.codecademy.com/resources/docs/sql) database. This code is malicious and can be sent to a database and run without permission. The result can be anything from bypassing login to data theft or corruption of a database. The code is usually entered when a website or application asks for user input.

To prevent SQL injection, databases should not take user input as a command to be run. Parameters can be used to protect against SQL injection, allowing for more control over the values being passed. This will ensure SQL will treat the data as text and not as a command to be executed.

## Vulnerable Queries

In this example, there is a form that asks for a `User ID`. The form will run this SQL command to check if the user exists.

```sql
SELECT * FROM users WHERE UserID = 'input from user';
```

Now if a user enters `1' OR '1'='1`, then the command will look like the following:

```sql
SELECT * FROM users WHERE UserID = '1' OR '1' = '1';
```

The user injecting the code will be able to access all the `UserID`s because `1=1` will always execute as `true`.

This [vulnerability](https://www.codecademy.com/resources/docs/cybersecurity/vulnerability) can be used to damage a database. The following input, `1'; DELETE FROM Projects WHERE '1'='1` results in the following query:

```sql
SELECT * FROM Projects WHERE UserID = '1'; DELETE FROM Projects WHERE '1'='1'
```

1. Users with a `UserID` set to `1` will be located and retrieved.
2. The semi-colon `;` indicates the end of a command and the beginning of the next one.
3. The next command will delete all the rows from the `Projects` table.

## Parameterized Queries

```sql
string sql = "SELECT * FROM users WHERE UserID = $userInput"
```

This example saves the query as a string and passes the value of the user's input as a variable, `$userInput`. Because the variable saves the whole input as a string, there's no possibility that the user can execute commands on the database.
