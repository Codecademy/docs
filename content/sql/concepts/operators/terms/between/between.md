---
Title: "BETWEEN"
Description: "Selects values, inclusively of beginning and end values, within a given range. BETWEEN works with numbers, text, or date data types."
Subjects:
  - "Data Science"
Tags:
  - "Queries"
  - "Database"
  - "Queries"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
CatalogContent:
  - "learn-sql"
  - "paths/analyze-data-with-sql"
---

Selects values, inclusively of beginning and end values, within a given range. BETWEEN works with numbers, text, or date data types.

## Code Example

Suppose we want to get students with GPA between 0 and 2 in ascending order:

```sql
SELECT * 
FROM students
WHERE gpa BETWEEN 0.0 AND 1.99
ORDER BY gpa;
```
