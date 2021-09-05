---
Title: 'AS'
Description: 'Renames a column or table with an alias for display, does not permanently change table/column names in the database.'
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
---

Renames a column or table with an alias for display, does not permanently change table/column names in the database.

## Code Example

```sql
SELECT student_name AS 'student',
  overall_gpa AS 'gpa',
  is_honor_student AS 'Honor Student'
FROM students;
```
