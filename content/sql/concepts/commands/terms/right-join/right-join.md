---
Title: 'RIGHT JOIN'
Description: 'Combines matching rows with rows from the right-side table.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Join'
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

The **`RIGHT JOIN`** command combines matching rows with rows from the right-side table.

## Syntax

```pseudo
SELECT column_name(s)
FROM table_1
RIGHT JOIN table_2
  ON table_1.column_name = table_2.column_name;
```

Every row in the right table is returned in the result set, and if the join condition is not met, then `NULL` values are used to fill in the columns from the left table.

## Example

To create a result set of every row in the `students` table combined with the `transfer_data` table where student IDs match. If the `ON` condition is not met, then `NULL` values are used to fill in the columns from the `transfer_data` table.

```sql
SELECT
  students.first_name,
  students.last_name,
  students.overall_gpa,
  transfer_data.overal_gpa
FROM students
RIGHT JOIN transfer_data
  ON students.student_id = transfer_data.student_id;
```

The result set will only include last name, first name, and both GPAs.
