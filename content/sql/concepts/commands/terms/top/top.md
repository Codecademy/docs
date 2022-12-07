---
Title: 'TOP'
Description: 'Returns a specified number of rows from the top of the result.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'T-SQL'
  - 'Transact-SQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

Returns a specified number of rows from the top of the result.

## Syntax

```sql
SELECT TOP (10) column_name(s)
FROM table_name;
```

```sql
SELECT TOP (25) PERCENT column_name(s)
FROM table_name;
```

## Example

The given query will display the top 5 rows from the `books` table.

```sql
SELECT TOP (5) *
FROM books;
```
