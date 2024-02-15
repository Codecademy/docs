---
Title: 'IS NULL'
Description: 'Checks if a value is NULL.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
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

The **`IS NULL`** operator checks if a value is `NULL`.

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
