---
Title: 'SQLAlchemy'
Description: 'SQLAlchemy is a flexible SQL toolkit and Object-Relational Mapping (ORM) library for Python, designed to enable efficient and Pythonic database interactions.'
Subjects:
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Database'
  - 'SQL'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**SQLAlchemy** is a widely used Python library that provides both high-level ORM and low-level SQL query capabilities. It simplifies database interactions by allowing developers to use Python objects for database manipulation while also supporting raw SQL queries. SQLAlchemy supports various relational databases like MySQL, PostgreSQL, SQLite, and others, and is highly customizable to suit complex database models. With SQLAlchemy, developers can interact with databases in a flexible and efficient manner, making it an essential tool for web development and data science projects.

## Syntax

```pseudo
from sqlalchemy import create_engine

# Create an engine instance
engine = create_engine('dialect+driver://username:password@host:port/database')

# Example of querying using SQLAlchemy
with engine.connect() as connection:
  result = connection.execute("SELECT * FROM users")
  for row in result:
    print(row)
```

- `create_engine`: Initializes the connection to the database with the provided database URI.
  - `dialect`: Specifies the type of database (e.g., `mysql`, `postgresql`, `sqlite`).
  - `driver` (Optional): Specifies the database driver to be used.
  - `username`, `password`: Credentials for authentication.
  - `host`, `port`: Database server's location.
  - `database`: Name of the database to connect to.

## Example

The following example shows how to connect to a SQLite database and query it using SQLAlchemy:

```py
from sqlalchemy import create_engine

# Create an engine instance for SQLite
engine = create_engine('sqlite:///example.db')

# Connect to the database and then execute a query
with engine.connect() as connection:
  result = connection.execute("SELECT * FROM users")
  for row in result:
    print(row)
```

This code will output the rows from the `users` table in the `example.db` SQLite database.
