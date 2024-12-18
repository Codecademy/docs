---
Title: 'pyodbc'
Description: 'pyodbc is a library in Python that provides a bridge between Python applications and ODBC-compliant databases, allowing efficient database operations.'
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

**`pyodbc`** is a Python library that enables Python programs to interact with databases through **ODBC (Open Database Connectivity)**, a standard API for accessing database management systems (DBMS). It provides a powerful and efficient way to execute SQL queries, retrieve results, and perform other database operations.

## Installation

To install `pyodbc`, `pip` can be used:

```bash
pip install pyodbc
```

## Syntax

A basic connection to an ODBC database and query execution with `pyodbc` follows this structure:

```pseudo
import pyodbc

# Connect to the database
connection = pyodbc.connect("Driver={Driver_Name};"
                            "Server=server_name;"
                            "Database=database_name;"
                            "UID=user_id;"
                            "PWD=password;")

# Create a cursor object
cursor = connection.cursor()

# Execute a query
cursor.execute("SQL QUERY")

# Fetch results
rows = cursor.fetchall()

# Process results
for row in rows:
  print(row)

# Close the connection
connection.close()
```

## Key Parameters

- `Driver`: Specifies the ODBC driver to use for the connection.
- `Server`: The database server's address or name.
- `Database`: The name of the database to connect to.
- `UID` and `PWD`: The username and password for authentication. They are case-sensitive in most databases.

> **Note**: Connection string formats depend on the database type. Refer to [connectionstrings.com](https://www.connectionstrings.com/) for specific examples.

## Example

The following example demonstrates connecting to a Microsoft SQL Server, querying a table, and printing the results:

```py
import pyodbc

# Define connection string
connection_string = ("Driver={ODBC Driver 17 for SQL Server};"
                     "Server=localhost;"
                     "Database=TestDB;"
                     "UID=sa;"
                     "PWD=your_password;")

try:
  # Establish connection
  conn = pyodbc.connect(connection_string)
  cursor = conn.cursor()

  # Execute a SQL query
  cursor.execute("SELECT * FROM Employees")

  # Fetch and print results
  for row in cursor:
    print(row)

except pyodbc.Error as ex:
  print("An error occurred:", ex)

finally:
  # Close the connection
  if 'conn' in locals():
    conn.close()
```

## Use Cases

Here are some use cases for `pyodbc`:

- Connecting to a variety of databases (e.g., SQL Server, MySQL, PostgreSQL) via ODBC
- Executing dynamic SQL queries
- Efficiently handling large datasets
