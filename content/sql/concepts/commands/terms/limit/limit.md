---
Title: 'LIMIT'
Description: 'Specifies, or limits, the maximum number of rows the result set will have.'
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

Specifies, or limits, the maximum number of rows the result set will have.

## Syntax

```sql
SELECT column_name(s)
FROM table_name
LIMIT 20;
```

## Example

The given query will limit the result set to 5 rows from the `movies` table.

```sql
SELECT *
FROM movies
LIMIT 5;
```
