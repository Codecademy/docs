---
Title: "AND"
Description: "A logical test that will only include rows where both conditions are true."
Subjects:
  - "Data Science"
Tags:
  - "Database"
  - "Queries"
  - "Tables"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
CatalogContent:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition 

A logical test that will only include rows where both conditions are true.

## Code Example

Suppose we want to get current students with GPA higher than 3.0:

```sql
SELECT * 
FROM students
WHERE enrolled_status = 'current' AND overall_gpa >= 3.0
```
