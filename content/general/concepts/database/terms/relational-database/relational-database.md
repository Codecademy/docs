---
Title: 'Relational Database'
Description: 'A relational database is a store of data organized in tables made of columns and rows, and the relationships between those tables.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'Primary Key'
  - 'Foreign Key'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
CatalogContent:
  - 'paths/design-databases-with-postgresql'
  - 'paths/analyze-data-with-sql'
  - 'paths/data-science'
---

[relational database example]: https://raw.githubusercontent.com/Codecademy/docs/main/media/general-relational-database.png 'Example of a Relational Database'

A **relational database** is a store of data organized in tables made of columns and rows, and the relationships between those tables.
The software that controls a relational database is called a relational database management system (RDBMS) and typically allows management and updates to the database through an implementation of the structured query language (SQL).

## Structure of a Relational Database

Most tables are defined with a key column that holds a unique value for every row. That column is called a primary key. Columns in a table that reference primary keys in other tables are called foreign keys. Data in different tables are related to each other via matching values in the key columns in those tables.

Rows in each table are also called records. Columns can also be called fields or attributes.

Generally each table represents a particular entity type, such as a user, product, or transaction. Each row or record represents a particular instance of that entity type, and each column/field in that record represents particular values ascribed to that instance, such as name, price, or transaction date.

For instance, a company may have a sales database with tables called `products` and `sales`.

- The `product` table would have columns for things like name, model, unit cost, and retail price.
- The `sales` table would have columns for things like sale date, payment method, and shipping address.

Each entry in the `sales` table would have a foreign key referring to the primary key of the `product` table (the product that was bought).

The relation between the `product` table to the `sales` table is referred to as a one-to-many relationship (for each product there can be multiple sales).

![Relational database example]

## Examples of Relational Database Management Systems

- MySQL is a free open-source RDBMS that is used for many database-driven web applications such as Drupal, Joomla and WordPress.
- SQLite is a C library used to embed relational database functionality into software packages.
- PostgreSQL is a free open-source RDBMS that emphasizes extensibility and compliance to the ANSI SQL standards.
- Microsoft SQL Server is a server-based RDBMS from Microsoft typically used as a back-end for applications running on a network.
- Microsoft Access is part of the Microsoft 365 suite of applications. It combines an RDBMS with a graphical user interface and programming tools, allowing application development inside the software.
- Microsoft Azure SQL Database is a managed cloud-based RDBMS provided as part of Microsoft Azure.
