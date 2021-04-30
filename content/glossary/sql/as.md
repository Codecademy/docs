<!--
---
Title: "AS"
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

# AS

## Definition 
Renames a column or table with an alias for display, does not permanently change table/column names in the database.

## Code Example

```sql
SELECT
  student_name AS Student,
  overall_gpa AS GPA,
  is_honour_student AS "Honour Student"
  FROM Students;
```
