---
Title: 'SQLite3'
Description: 'SQLite is an SQL database engine written in C, designed for embedding in applications and systems.'
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

The **`sqlite3`** library is used to connect to SQLite databases and provides functions to interact with them.

It can also be used for prototyping while developing an application.

## Syntax

```pseudo
import sqlite3
```

The **`sqlite3`** library handles the communication with the databases.

## Create a connection

To work with database, first connect to it using **`.connect()`** function.

```py
import sqlite3

con = sqlite3.connect("mydb_db.db")
```

## Create a cursor

A cursor is required to execute SQL statements. The function **`.cursor()`** creates one.

```py
curs = connection.cursor()

```

## Create a table

The **`.execute()`** function can be used to create a table.

```py
curs.execute('''CREATE TABLE persons(
            name TEXT,
            age INTEGER,
            gender TEXT)
            ''')
```

## Insert a value into the table

To insert values into the table, the SQL statement is executed with the **`.execute()`** function.

```py
curs.execute('''INSERT INTO persons VALUES(
            'Alice', 21, 'female')''')
```

## Insert many values into the table

In order to insert many values into the table, the SQL statement is executed with the **`.executemany()`** function and in addition with an array.

```py
new_persons = [('Bob', 26, 'male'),
              ('Charlie', 19, 'male'),
              ('Daisy', 18, 'female')
              ]

curs.executemany('''INSERT INTO persons VALUES(?, ?, ?)''', new_persons)
```

## Commit the Transaction

The **`.commit()`** function persists the inserted values to the database.

```py
con.commit()
```

## Check the inserted rows

In order to check all inserted rows, the function **`.fetchall()`** can be used.

```py
result = cursor.execute("SELECT * FROM persons")

result.fetchall()
```

## Close the connection

After all transactions are completed, the connection should be closed with **`.close()`**.

```py
connection.close()
```

## Codebyte Example

The complete example for tinkering.

```codebyte/python
import sqlite3
# Create a connection to database
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

# Insert many values into the table
new_persons = [('Bob', 26, 'male'),
              ('Charlie', 19, 'male'),
              ('Daisy', 18, 'female')
              ]

curs.executemany('''INSERT INTO persons VALUES(?, ?, ?)''', new_persons)

# Commit the Transaction to database
con.commit()

# Check the inserted rows
result = curs.execute("SELECT * FROM persons")
printout = result.fetchall()
print(printout)

# Finally close the connection
con.close()
```
