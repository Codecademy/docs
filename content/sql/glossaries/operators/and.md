---
Title: "AND"
Subjects:
  - "Data Science"
Tags:
  - "Database"
  - "Queries"
  - "Table"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
---

## Definition 

A logical test that will only include rows where both conditions are true.

## Code Example

```sql
SELECT * FROM Students
WHERE enrolled_status = 'current' AND overall_gpa >= 3.0
```
