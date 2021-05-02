<!--
---
Title: "CREATE TABLE"
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
Creates a new table within a database.

## Code Example

```sql
CREATE TABLE Students (
  student_id int,
  last_name varchar(255),
  first_name varchar(255),
  local_address varchar(255),
  home_of_record varchar(255),
  major varchar(255),
  overall_gpa decimal(3,2)
);
```
