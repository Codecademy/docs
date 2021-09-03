---
Title: 'SELECT'
Description: 'Fetchs data from a database. Every query will begin with SELECT.'
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

Fetchs data from a database. Every query will begin with `SELECT`.

## Syntax

The `SELECT *` statement returns all columns from the provided table in the result set:

```sql
SELECT *
FROM table_name;
```

You can also select individual columns:

```sql
SELECT column_name(s)
FROM table_name;
```

## Examples

The following query will fetch all columns and records (rows) from the `movies` table:

```sql
SELECT *
FROM movies;
```

And this query will select just the `title` and `rating` columns from the `movies` table:

```sql
SELECT title, rating
FROM movies;
```
