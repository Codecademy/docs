---
Title: "BETWEEN"
Subjects:
  - "Data Science"
Tags:
  - "Queries"
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

Selects values, inclusively of beginning and end values, within a given range. BETWEEN works with numbers, text, or date data types.

## Code Example

```sql
SELECT * FROM students
WHERE gpa BETWEEN 0.0 AND 1.99
ORDER BY gpa;
```
