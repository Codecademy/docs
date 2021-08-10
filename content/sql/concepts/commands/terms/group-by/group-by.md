---
Title: "GROUP BY"
Description: "Groups a result set based on an aggregate function (COUNT(), MIN(), MAX(), SUM(), AVG()). It lists the number in each group."
Subjects:
  - "Data Science"
Tags:
  - "Database"
  - "Queries"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
CatalogContent:
  - "learn-sql"
  - "paths/analyze-data-with-sql"
  - "paths/design-databases-with-postgresql"
---



Groups a result set based on an aggregate function (`COUNT()`, `MIN()`, `MAX()`, `SUM()`, `AVG()`). It lists the number in each group.

## Code Example

To return a result set of the number (count) of students from each country:

```sql
SELECT COUNT(student_name),
  birth_country
FROM students
GROUP BY birth_country;
```
