---
Title: 'IS NOT NULL'
Description: 'Checks if a value is not NULL.'
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

The **`IS NOT NULL`** operator checks if a value is not equal to `NULL`.

## Syntax

```sql
SELECT column_name(s)
FROM table_name
WHERE condition IS NOT NULL;
```

## Example

The given query will select all customers who have a `birthday` stored in the database.

```sql
SELECT *
FROM customers
WHERE birthday IS NOT NULL;
```
