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
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition

Groups a result set based on an aggregate function (`COUNT()`, `MIN()`, `MAX()`, `SUM()`, `AVG()`). It lists the number in each group.

## Code Example

To return a result set of the number (count) of students from each country:

```sql
SELECT COUNT(student_name),
  birth_country
FROM students
GROUP BY birth_country;
```
