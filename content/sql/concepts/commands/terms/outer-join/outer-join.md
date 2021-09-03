---
Title: 'OUTER JOIN'
Description: 'Ccombine rows from different tables even if the join condition is not met.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

Combine rows from different tables even if the join condition is not met.

## Syntax

Every row in the left table is returned in the result set, and if the join condition is not met, then `NULL` values are used to fill in the columns from the right table.

```sql
SELECT column_name(s)
FROM table_1
LEFT JOIN table_2
  ON table_1.column_name = table_2.column_name;
```

## Example

To create a result set of every row in the `students` table combined with the `transfer_data` table where student IDs match. And if the join condition is not met, then `NULL` values are used to fill in the columns from the `transfer_data` table.

```sql
SELECT
  students.first_name,
  students.last_name,
  students.overall_gpa,
  transfer_data.overal_gpa
FROM students
LEFT JOIN transfer_data
  ON students.student_id = transfer_data.student_id;
```

The result set will only include last name, first name, and both GPAs.
