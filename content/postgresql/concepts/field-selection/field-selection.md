---
Title: 'Field Selection'
Description: 'Allow user to select specific columns or fields from a database.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Database'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In PostgreSQL, **`Field Selection`** allows the user to fetch a specific column or field from the database. The `SELECT` statement is used with the column name to retrieve the data.

## Syntax

```pseudo
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

## Example

For example, consider this `students_marks` table with the following data:

| student_id | name    | grade |
| ---------- | ------- | ----- |
| 1          | Alice   | A     |
| 2          | Bob     | B     |
| 3          | Charlie | A     |
| 4          | David   | C     |
| 5          | Eva     | B     |

```sql
SELECT name from students_marks
```

The above query will return only the `name` column:

| name    |
| ------- |
| Alice   |
| Bob     |
| Charlie |
| David   |
| Eva     |
