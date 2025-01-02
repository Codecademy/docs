---
Title: 'SQLite3'
Description: 'SQLite3 is a library used to connect to SQLite databases.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'SQLite'
  - 'Documentation'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`sqlite3`** library is used to connect to SQLite databases and provides functions to interact with them. It can also be used for prototyping while developing an application.

## Syntax

```pseudo
import sqlite3
```

The `sqlite3` library handles the communication with the databases.

## Create a Connection

To work with a database, it first needs to be connected to using the **`.connect()`** function:

```py
import sqlite3

con = sqlite3.connect("mydb_db.db")
```

## Create a Cursor

A cursor is required to execute SQL statements and the **`.cursor()`** function creates one:

```py
curs = connection.cursor()
```

## Create a Table

The **`.execute()`** function can be used to create a table:

```py
curs.execute('''CREATE TABLE persons(
            name TEXT,
            age INTEGER,
            gender TEXT)
            ''')
```

## Insert a Value Into the Table

To insert values into the table, the SQL statement is executed with the `.execute()` function:

```py
curs.execute('''INSERT INTO persons VALUES(
            'Alice', 21, 'female')''')
```

## Insert Multiple Values Into the Table

To insert multiple values into the table, the SQL statement is executed using the **`.executemany()`** function with an array of values:

```py
new_persons = [('Bob', 26, 'male'),
              ('Charlie', 19, 'male'),
              ('Daisy', 18, 'female')
              ]

curs.executemany('''INSERT INTO persons VALUES(?, ?, ?)''', new_persons)
```

## Commit the Transaction

The **`.commit()`** function saves the inserted values to the database permanently:

```py
con.commit()
```

## Check the Inserted Rows

To check all the inserted rows, the **`.fetchall()`** function can be used:

```py
result = cursor.execute("SELECT * FROM persons")

result.fetchall()
```

## Close the Connection

After completing all the transactions, the connection can be closed with **`.close()`**:

```py
connection.close()
```

## Codebyte Example

Here's a codebyte example showing how to connect to an SQLite database, create a table, insert/query data, and close the connection:

```codebyte/python
import sqlite3
# Create a connection to the database
con = sqlite3.connect("mydb_db.db")

# Create a cursor to execute SQL statements
curs = con.cursor()

# Ensure to create a new table
curs.execute('''DROP TABLE IF EXISTS persons''')

# Create a new table
curs.execute('''CREATE TABLE persons(
  name TEXT,
  age INTEGER,
  gender TEXT)
  ''')

# Insert a value into the table
curs.execute('''INSERT INTO persons VALUES(
'Alice', 21, 'female')''')

# Insert multiple values into the table
new_persons = [('Bob', 26, 'male'),
              ('Charlie', 19, 'male'),
              ('Daisy', 18, 'female')
              ]

curs.executemany('''INSERT INTO persons VALUES(?, ?, ?)''', new_persons)

# Commit the transaction to database
con.commit()

# Check the inserted rows
result = curs.execute("SELECT * FROM persons")
printout = result.fetchall()
print(printout)

# Close the connection
con.close()
```
