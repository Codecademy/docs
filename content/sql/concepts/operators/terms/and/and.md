---
Title: 'AND'
Description: 'Returns rows from a table based on all conditions evaluating to TRUE.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'Tables'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

The **`AND`** operator is used in a [`WHERE`](https://www.codecademy.com/resources/docs/sql/commands/where) clause to return rows from a table based on all conditions evaluating to `TRUE`.

## Syntax

```pseudo
SELECT column1, column2, ...
FROM table_name
WHERE condition1
  AND condition2
  ...
  AND conditionN;
```

If any of the `condition_`s evaluate to `NOT TRUE`, then the entire `WHERE` clause will not return the desired `column_`s.

## Example

THe following example filters the current students with GPA higher than 3.0 for the rest of the `students` table:

```sql
SELECT *
FROM students
WHERE enrolled_status = 'current' AND overall_gpa >= 3.0
```
