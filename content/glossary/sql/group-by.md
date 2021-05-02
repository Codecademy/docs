<!--
---
Title: "GROUP BY"
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
Groups a result set based on an aggregate function (COUNT, MIN, MAX, SUM, AVG). It lists the number in each group.

## Code Example

```sql
SELECT
  COUNT(student_name),
  birth_country
FROM Students
GROUP BY birth_country;
/* Returns a result set of the number(count) of students from each country */
```
