---
Title: 'HAVING'
Description: 'A conditional statement similar to WHERE but used with aggregate functions (COUNT(), MIN(), MAX(), SUM(), AVG()).'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

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
