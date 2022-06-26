---
Title: 'CREATE TABLE'
Description: 'Creates a new table within a database.'
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
---

The **`CREATE TABLE`** command creates a new table within a database.

## Syntax

```pseudo
CREATE TABLE table_name (
  column_name column_definition,
  column_name column_definition,
  ...
);
```

## Example

```sql
CREATE TABLE students (
  student_id int,
  last_name varchar(255),
  first_name varchar(255),
  local_address varchar(255),
  home_of_record varchar(255),
  major varchar(255),
  overall_gpa decimal(3,2)
);
```
