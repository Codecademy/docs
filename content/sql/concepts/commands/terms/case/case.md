---
Title: 'CASE'
Description: 'Returns different output based on the conditions of each statement.'
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

The **`CASE`** command is a logical test that returns different output based on the conditions of each statement and closes with an `END` clause.

## Syntax

```pseudo
CASE
  WHEN this_condition THEN this_result
  WHEN that_condition THEN that_result
  ELSE fallback_result
END;
```

The result will come from the first `WHEN .. THEN ...` statement that evaluates as "True". If none of these statements are "True", a `fallback_result` from the `ELSE` clause will be returned. If there is no `ELSE` clause and none of the `WHEN .. THEN ...` statements evaluate to "True", `NULL` is returned.

## Example

The following example showcases the `CASE` command returning output based on several conditions:

```sql
SELECT student_name AS 'Student',
  overall_gpa AS 'GPA',
CASE
  WHEN overall_gpa > 3.0 THEN "Exceptional grades, keep up the good work!"
  WHEN overall_gpa BETWEEN 2.0 AND 3.0 THEN "Good job! Study hard this term!"
  ELSE "You're at risk of academic probation, seek help if needed."
END
FROM students;
```
