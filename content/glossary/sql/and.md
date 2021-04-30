<!--
---
Title: "AND"
Subjects:
  - "sql"
  - "data science"
Tags:
  - "sql"
  - "data science"
  - "database"
  - "queries"
  - "table"
  - "postgressql"
  - "mysql"
  - "sqlite"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/sql-table-transformation"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---
-->

# AND

## Definition 
A logical test that will only include rows where both conditions are true.

## Code Example

```sql
SELECT * FROM Students
  WHERE enrolled_status = 'current' AND overall_gpa >= 3.0
```
