---
Title: 'About SQL'
Description: 'SQL stands for Structured Query Language, and is the programming language implemented by a database management system (DBMS) used for managing and querying data held in a relational database. SQL has been an ANSI standard since 1986 and each different DBMS has its own implementation of this standard. These different implementations have varying adherence to the standard, so in practice SQL code of any complexity is not typically transferrable between different DBMS systems without some modification. However, because of the standard, skills learned in one DBMS system are largely applicable to another. SQL statements can be broadly grouped into four different classes, or sub-languages: - Data Query Language (DQL): Includes commands for performing queries on data within schema objects, retrieving some schema relation based on the query passed to it. Examples include: - SELECT retrieves data from the database. - Data Definition Language (DDL): Includes commands used to define the database schema. These commands are used to create and modify the structure of database objects. Examples include: - CREATE creates an object in the database.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

SQL stands for **S**tructured **Q**uery **L**anguage, and is the programming language implemented by a database management system (DBMS) used for managing and querying data held in a relational database.

SQL has been an ANSI standard since 1986 and each different DBMS has its own implementation of this standard. These different implementations have varying adherence to the standard, so in practice SQL code of any complexity is not typically transferrable between different DBMS systems without some modification. However, because of the standard, skills learned in one DBMS system are largely applicable to another.

## Types of Statements

SQL statements can be broadly grouped into four different classes, or sub-languages:

- Data Query Language (DQL): Includes commands for performing queries on data within schema objects, retrieving some schema relation based on the query passed to it. Examples include:

  - `SELECT` retrieves data from the database.

- Data Definition Language (DDL): Includes commands used to define the database schema. These commands are used to create and modify the structure of database objects. Examples include:

  - `CREATE` creates an object in the database.
  - `DROP` deletes an object from the database.
  - `ALTER` changes the definition of an existing object in the database.

- Data Manipulation Language (DML): Includes commands used to modify the data stored in the database. Examples include:

  - `INSERT` inserts new data into a database table.
  - `UPDATE` alters data in a database table.
  - `DELETE` removes data from a database table.

- Data Control Language (DCL): Includes commands dealing with the controls and properties of the DBMS, such as rights and permissions to database objects. Examples include:
  - `GRANT` grants a user permissions on a database object.
  - `REVOKE` removes a user's permissions on a database object.

## Examples of SQL code

Selecting first and last name from a table of users:

```sql
SELECT firstName, lastName
FROM users;
```

Delete records from a transaction table with a particular field value:

```sql
DELETE FROM transactionTable
WHERE transactionKey = '5';
```

Create a table with three fields:

```sql
CREATE TABLE cars (
  manufacturer VARCHAR(40),
  model VARCHAR(40),
  year INT
);
```

## Different Databases and Query Languages

Different Database Management Systems (DBMS) use different variations of standard SQL and each DBMS offers different advantages over the remaining ones for different use cases. The most common DBMS in use today is Microsoft SQL Server (MSSQL), which utilizes Transact-SQL (T-SQL), Microsoft's proprietary SQL variant. Here are some other examples:

- MySQL (Standard SQL)
- SQLite (Non-standard SQL Variant)
- PostgreSQL (PSQL)
