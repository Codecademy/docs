---
Title: "IS NULL"
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

Checks if a value is `NULL`.

## Syntax

```sql
SELECT column_name(s)
FROM table_name
WHERE condition IS NULL;
```

## Example

The given query will select all customers who do not have a `birthday` stored in the database.

```sql
SELECT *
FROM customers
WHERE birthday IS NULL;
```
