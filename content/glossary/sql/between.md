<!--
---
Title: "BETWEEN"
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

# BETWEEN

## Definition 
Selects values, inclusively of beginning and end values, within a given range. BETWEEN works with numbers, text, or date data types.

## Code Example

```sql
SELECT * FROM Students
  WHERE
    overall_gpa BETWEEN 0.0 AND 1.99
  ORDER BY
    overall_gpa;
```
