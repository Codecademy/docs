---
Title: 'Inheritance'
Description: 'Enables tables to inherit structure and behavior from parent tables.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'PostgreSQL'
  - 'Database'
  - 'Data'
  - 'Inheritance'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**Inheritance** in PostgreSQL allows a table to inherit the structure and behavior of one or more parent tables. This allows for a table to have a common set of columns and then to add additional columns to the table.

Some common use cases for inheritance are following:

- _Partitioning_: Inheritance divides a large table into smaller, more manageable parts called partitions, improving query performance and data organization.
- _Data Modeling_: Inheritance models relationships between tables, allowing child tables to extend or modify the structure of parent tables, supporting flexible and hierarchical designs.
- _Specialized Data with Shared Attributes_: Inheritance defines shared attributes in a parent table, while child tables manage more specialized data.

## Syntax

To create a table that inherits columns from another table, the `INHERITS` clause is used:

```pseudo
CREATE TABLE table_name (
  column_name_1,
  column_name_2
) INHERITS (parent_table_name);
```

## Examples

Here is an example of inheritance in PostgreSQL:

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

To update an existing table to inherit columns from another table, the `ALTER TABLE` command is used followed by the `INHERIT` clause:

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

To create a table that inherits from two or more parent tables, the `INHERITS` clause is used with a comma-separated list of parent tables. The order of the parent tables affects the column order in the child table, but not the inheritance functionality. The child table should explicitly declare the primary key to avoid conflicts:

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
