<!--
---
Title: "INNER JOIN"
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
Returns a result set off all rows that have matching values in both tables, omits rows where match fails.

## Code Example

```sql
SELECT
  Students.last_name,
  Students.first_name,
  Students.overall_gpa,
  Transfer_Data.overal_gpa
FROM Students
INNER JOIN Transfer_Data ON Students.student_id = Transfer_Data.student_id;
/* Creates a result set of every row where student ids match in both tables
and only includes last name, first name, and both GPAs */
```
