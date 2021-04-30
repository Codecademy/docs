<!--
---
Title: "HAVING"
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

# HAVING

## Definition 
A conditional statement similar to WHERE but used with aggregate functions (COUNT, MIN, MAX, SUM, AVG).

## Code Example

```sql
SELECT
  COUNT(student_name),
  birth_country
FROM Students
GROUP BY birth_country
HAVING COUNT(student_name) < 25;
/* Returns a result set of the number(count) of students from each country
if the total number is less than 25 */
```
