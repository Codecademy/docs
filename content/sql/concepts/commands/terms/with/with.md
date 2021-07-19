---
Title: "WITH"
Subjects:
  - "Data Science"
  - "Computer Science"
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

Stores the result of a query in a temporary table using an alias.

## Syntax

The `WITH` clause is also known as common table expression (CTE) and subquery factoring.

```sql
WITH temporary_name AS (
   SELECT *
   FROM table_name
)
SELECT *
FROM temporary_name
WHERE condition;
```

You can also define multiple temporary tables using a comma and with one instance of the `WITH` keyword.

## Example

The given query will store the result of `SELECT * FROM movies` into a temporary table named `temporary_movies`:

```sql
WITH temporary_movies AS (
   SELECT *
   FROM movies
)
SELECT *
FROM temporary_movies
WHERE year BETWEEN 2000 AND 2020;
```
