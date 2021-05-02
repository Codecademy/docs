<!--
---
Title: "DELETE"
Subjects:
  - "data science"
Tags:
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

## Definition 
Removes exisiting record(s) from a table. If a WHERE statement is excluded, all records in the table will be deleted.

## Code Example

```sql
DELETE FROM Students
  WHERE enrolled_status = 'not_current';
/* Deletes all non-current students */

DELETE FROM Students;
/* Deletes all entries in the Students table */
```
