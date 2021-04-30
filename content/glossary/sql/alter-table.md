<!--
---
Title: "ALTER TABLE"
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

# ALTER TABLE

## Definition 
Adds, deletes or modifies or changes the data type of a column in a table.

## Code Example

```sql
ALTER TABLE Students
    ADD exam_grade INT(3);

ALTER TABLE Students
    DROP COLUMN last_terms_grades;
```
