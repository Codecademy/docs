---
Title: 'Inheritance' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Inheriting the columns of another table' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'PostgreSQL'
  - 'Database'
  - 'Inheritance'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-sql'
---
  
**`Inheritance`** is a feature in PostgreSQL that allows a table to inherit the structure and behavior or one or more parent tables.

## The Concept
Inheritance in PostgreSQL allows for a table to inherit the columns and constraints of one or more tables. This allows for a table to have a common set of columns, and then to add additional columns to the table.

## Use Cases
Some common use cases for using inheritance are:
- Partitioning
- Data Modeling
- Specialized Data with Shared Attributes

## Syntax

If one is to create a table that inherits the columns of another table, the `INHERITS` clause is used.

```sql
CREATE TABLE table_name (
  column_name_1,
  column_name_2
) INHERITS (parent_table_name);
```

# Example 1
To create a table that inherits the columns of another table, the `INHERITS` clause is used. 

```sql
CREATE TABLE vehicle (
    vehicle_id SERIAL PRIMARY KEY,
    manufacturer TEXT,
    model TEXT,
    year INT
);

CREATE TABLE car (
    number_of_doors INT
) INHERITS (vehicle);

```


## Example 2
To update an existing table to inherit the columns of another table, the `ALTER TABLE` command is used followed by the `INHERIT` clause.


```sql
CREATE TABLE vehicle (
    vehicle_id SERIAL PRIMARY KEY,
    manufacturer TEXT,
    model TEXT,
    year INT
);

CREATE TABLE car (
    number_of_doors INT
);

ALTER TABLE car INHERIT vehicle;
```

## Example 3
To create a table that inherits from two or more parent tables, the `INHERITS` clause is used. The INHERITS clause is followed by a comma-separated list of parent tables. The order of the parents in the INHERITS clause affects the order of the columns in the child table, but doesn't impact the inheritance functionality. To resolve potential primary key conflicts, the child table should explicitly declare the primary key column.

```sql
CREATE TABLE vehicle (
  vehicle_id SERIAL PRIMARY KEY,
  manufacturer TEXT,
  model TEXT,
  year INT
);

CREATE TABLE engine (
  fuel_type TEXT,
  horsepower INT
);

CREATE TABLE car (
  number_of_doors INT
  vehicle_id INT PRIMARY KEY
  ) INHERITS (vehicle, ENGINE);
```