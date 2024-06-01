# Inheritance in PostgreSQL 

## Introduction
Inheritance in PostgreSQL allows you to create a new table that inherits all columns from one or more parent tables.

### Syntax
The basic syntax for creating an inheriting table is as follows:
``` sql
CREATE TABLE new_table (
	column_definitions
) INHERITS (parent_table);
```

#### Example
Let's consider an example where we have a countries table and we want to create a major cities table that inherits from the countries table.
``` sql 
CREATE TABLE countries (
  country_name    text,
  population      real,
  area            int     -- (in square miles)
);

CREATE TABLE major_cities (
  city_name       text,
  population      real,
  elevation       int,     -- (in ft)
  state           char(2) UNIQUE NOT NULL
) INHERITS (countries);
```
  In this example, the 'INHERITS (countries)' clause indicates that the row of 'major_cities' inherits all the columns of the 'countries' table (country_name, population, and area) from its parent, 'countries' table. In PostgreSQL, a table can inherit its structure and attributes from zero or more parent tables through inheritance. For example the following query finds the names of all countries, including major cities, that are over 500 square miles in size:
``` sql
 SELECT country_name, area
  FROM countries
  WHERE area > 500;
```
Which returns
``` sql
   country_name | area
----------------+-----------
 Russia         |   6601665
 Canada         |   3855101
 China          |   3747877
(3 rows)
```
Conversely, the following query finds all the major cities that are not situated at an elevation of 1000 feet:
``` sql
SELECT city_name, elevation
	FROM ONLY major_cities
	WHERE elevation <= 1000;
```
Which returns
``` sql
   name    | elevation
-----------+-----------
 Milan     |       122
 Shanghai  |       122
(2 rows)
```
Here the ONLY preceding major_cities ensures that the query operates exclusively on the major_cities table, and not tables below major_cities in the inheritance hierarchy. 