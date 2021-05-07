---
Title: "GROUP BY"
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

Groups a result set based on an aggregate function (`COUNT()`, `MIN()`, `MAX()`, `SUM()`, `AVG()`). It lists the number in each group.

## Code Example

```sql
SELECT COUNT(student_name),
  birth_country
FROM students
GROUP BY birth_country;
/* Returns a result set of the number(count) of students from each country */
```
