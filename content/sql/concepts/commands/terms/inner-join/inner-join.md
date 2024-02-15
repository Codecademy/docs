---
Title: 'INNER JOIN'
Description: 'Returns all rows that have matching values in both tables and omits non-matching rows.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'Join'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

The **`INNER JOIN`** command returns all rows that have matching values in both tables and omits non-matching rows.

![INNER JOIN GIF](https://content.codecademy.com/courses/learn-sql/multiple-tables/inner-join.gif)

## Syntax

```pseudo
SELECT
  table_A.this_column,
  table_A.that_column,
  table_B.this_column,
  table_B.that_column,
FROM table_A
INNER JOIN table_B
  ON table_A.this_value = table_B.this_value;
```

One or more matching columns can be selected and joined from `table_A` and `table_B` based on matching column values between tables in the `ON` clause.

## Example

The following example creates a result set of every row where the `student_id` matches in both tables and only includes `last_name`, `first_name`, and both GPAs:

```sql
SELECT
  students.last_name,
  students.first_name,
  students.overall_gpa,
  transfer_data.overal_gpa
FROM students
INNER JOIN transfer_data
  ON students.student_id = transfer_data.student_id;
```
