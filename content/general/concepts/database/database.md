---
Title: 'Database'
Description: 'A database is a collection of structured information stored so it can be easily accessed and updated. In a computer system, databases are commonly accessed through a database management system, or DBMS.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/data-science'
---

A **database** is a collection of structured information stored so it can be easily accessed and updated. In a computer system, databases are commonly accessed through a database management system, referred to as a DBMS.

## Types of Databases

There are many different ways for database systems to structure and organize data. The type of database used is dependent on the type of data being stored, and the intended use for it.

### Relational Databases

[Relational databases](https://www.codecademy.com/resources/docs/general/database/relational-database) structure their data in tables made up of rows and columns. Multiple tables can have relationships to each other based on the values in key columns. They provide an efficient and flexible way to access structured information. Data is typically queried and manipulated through some form of [Structured Query Language (SQL)](https://www.codecademy.com/resources/docs/sql) implemented by the DBMS.

### Object Databases

Object databases structure their data in the form of objects (as used in [object-oriented programming](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming)) rather than tables. This is useful in software development where the application using the data, and the DBMS manipulating the data, can both use the same model of the data.

#### Object-Relational Databases

A hybrid of the above two models. Unlike pure object databases where the database is primarily a persistent store for objects created by a program written in an object-oriented programming language, object-relational databases are manipulated via a query language as in relational databases. Yet they still support objects, classes and inheritance like a pure object database.

### NoSQL Databases

NoSQL databases are also known as nonrelational databases. They are a wide variety of databases that use different structures for data rather than the tables used in relational databases. They are implemented using various different structures for different purposes. For example:

- Key–Value Store: Stores data in an associative array where data is stored as a collection of key-value pairs where any possible key only appears once in the collection.
- Document Store: Stores data as documents in some standard format such as [XML](https://www.codecademy.com/resources/docs/general/xml), TAML or [JSON](https://www.codecademy.com/resources/docs/general/json). Documents are stored in the database with a unique key representing that document.
- Graph Database: Stores data as elements connected by a finite number of relations, such as a subway map or a network of friends on Facebook.
