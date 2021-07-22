---
Title: "AS"
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
---

## Definition 

Renames a column or table with an alias for display, does not permanently change table/column names in the database.

## Code Example

```sql
SELECT student_name AS 'student',
  overall_gpa AS 'gpa',
  is_honor_student AS 'Honor Student'
FROM students;
```
