---
Title: 'SQL Connectors'
Description: 'SQL connectors are libraries that enable Python applications to connect to and interact with SQL databases.'
Subjects:
  - 'Data Science'
  - 'Web Development'
  - 'Developer Tools'
Tags:
  - 'Database'
  - 'SQL'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**SQL Connectors** are libraries that enable Python applications to connect to and interact with SQL databases.

They act as a bridge, allowing Python code to execute SQL commands for tasks such as inserting, deleting, updating, and retrieving data from a SQL database.

By using SQL connectors, developers can dynamically interact with databases while maintaining the original database structure.

## Setting Up a SQL Connector

To use a SQL connector, you first need to set up your development environment. This includes installing the appropriate connector library for your database and ensuring that your database server is accessible.

### 1. Install the Connector

- For MySQL: Use `pip install mysql-connector-python`.
- For PostgreSQL: Use `pip install psycopg2`.
- For SQLite: No installation is needed; it is built into Python's standard library.

### 2. Set Up the Database

- Ensure the database server is running and accessible.
- Create or access an existing database.

### 3. Import the Connector Library

Use the appropriate Python module to work with the database, such as `mysql.connector` for MySQL or `sqlite3` for SQLite.

The next step is to connect your database. Connections are established using the `.connect()` method, which requires parameters like the `host`, `username`, `password`, and `database` name.

### General Workflow

- Import the connector library.
- Use the `.connect()` method to establish a connection.
- Handle connection errors with `try-except` blocks.

```py
import mysql.connector

connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password123',
    database='example_db'
)
print("Connection established!")
connection.close()
```

## Executing SQL Queries

Once connected, use a cursor object to execute SQL queries. The cursor facilitates operations such as creating tables, inserting data, and retrieving records.

### Query Execution

- Use `cursor.execute()` to execute SQL queries.
- Use `cursor.fetchall()` to fetch all rows from a `SELECT` query.

```py
cursor = connection.cursor()
cursor.execute('SELECT * FROM users')
results = cursor.fetchall()

for row in results:
    print(row)
```
