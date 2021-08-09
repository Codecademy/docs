---
Title: "HAVING"
Description: "A conditional statement similar to WHERE but used with aggregate functions (COUNT(), MIN(), MAX(), SUM(), AVG())."
Subjects:
  - "Data Science"
Tags:
  - "Database"
  - "Queries"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
CatalogContent:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition 

A conditional statement similar to `WHERE` but used with aggregate functions (`COUNT()`, `MIN()`, `MAX()`, `SUM()`, `AVG()`).

## Code Example

To return a result set of the number (count) of students from each country if the total number is less than 25:

```sql
SELECT COUNT(student_name),
  birth_country
FROM students
GROUP BY birth_country
HAVING COUNT(student_name) < 25;
```
