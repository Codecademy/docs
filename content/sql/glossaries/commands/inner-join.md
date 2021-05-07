---
Title: "ALTER TABLE"
Subjects:
  - "Data Science"
Tags:
  - "Database"
  - "Queries"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition 

Returns a result set off all rows that have matching values in both tables, omits rows where match fails.

## Code Example

```sql
SELECT
  students.last_name,
  students.first_name,
  students.overall_gpa,
  transfer_data.overal_gpa
FROM students
INNER JOIN transfer_data ON students.student_id = transfer_data.student_id;
/* Creates a result set of every row where student ids match in both tables
and only includes last name, first name, and both GPAs */
```
