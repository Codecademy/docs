---
Title: 'Inheritance' 
Description: 'Inheriting the columns of another table' 
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'PostgreSQL'
  - 'Database'
  - 'Inheritance'
CatalogContent: 
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---
  
**`Inheritance`** in PostgreSQL allows a table to inherit the structure and behavior of one or more parent tables.

## The Concept

Inheritance in PostgreSQL allows for a table to inherit the columns and constraints of one or more tables. This allows for a table to have a common set of columns, and then to add additional columns to the table.

**Use Cases**

Some common use cases for using inheritance are:

- **Partitioning**: Inheritance divides a large table into smaller, more manageable parts called partitions, improving query performance and data organization.

- **Data Modeling**: Inheritance models relationships between tables, allowing child tables to extend or modify the structure of parent tables, supporting flexible and hierarchical designs.

- **Specialized Data with Shared Attributes**: Inheritance defines shared attributes in a parent table, while child tables manage more specialized data.

## Syntax

To create a table that inherits columns from another table, use the `INHERITS` clause.

```sql
CREATE TABLE table_name (
  column_name_1,
  column_name_2
) INHERITS (parent_table_name);
```

## Examples

To create a table that inherits columns from another table, use the `INHERITS` clause:

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

To update an existing table to inherit columns from another table, use the `ALTER TABLE` command followed by the `INHERIT` clause:

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

To create a table that inherits from two or more parent tables, use the `INHERITS` clause with a comma-separated list of parent tables. The order of parent tables affects the column order in the child table but not the inheritance functionality. The child table should explicitly declare the primary key to avoid conflicts:

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
    number_of_doors INT,
    vehicle_id INT PRIMARY KEY
) INHERITS (vehicle, engine);
```
