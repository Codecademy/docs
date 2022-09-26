---
Title: 'INSERT INTO'
Description: 'Creates and places new rows into a table.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

The **`INSERT INTO`** command creates and places new rows into a table.

## Syntax

```pseudo
INSERT INTO table_name
VALUES (value1, value2, ...);
```

Multiple rows can be inserted by adding additional sets to the `VALUES` clause:

```pseudo
INSERT INTO table_name
VALUES
  (value1, value2, ...),
  (value1, value2, ...);
```

To add values corresponding to only specific columns, thereby leaving the rest of the row as default values, specify them alongside the table name:

```pseudo
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

Default values can also be added using the `DEFAULT` keyword for the relevant column value:

```pseudo
INSERT INTO table_name
VALUES (value1, DEFAULT, value3, ...);
```

## Example

The given query adds a new student to a `students` table, providing values for `first_name`, `last_name`, and `enrollment_date`, thereby inserting default values for all other columns:

```sql
INSERT INTO students (first_name, last_name, enrollment_date)
VALUES ('Jeremy', 'Barbosa', '2016-09-01');
```
