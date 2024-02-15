---
Title: 'AND'
Description: 'Tests if all conditions in a given expression evaluate to TRUE.'
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

The **`AND`** operator tests if all conditions in a given expression evaluate to `TRUE`.

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
