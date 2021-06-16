---
Title: "CREATE TABLE"
Subjects:
  - "Data Science"
Tags:
  - "Database"
  - "Queries"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"

---

## Definition 

Creates a new table within a database.

## Example

```sql
CREATE TABLE students (
  student_id int,
  last_name varchar(255),
  first_name varchar(255),
  local_address varchar(255),
  home_of_record varchar(255),
  major varchar(255),
  overall_gpa decimal(3,2)
);
```
