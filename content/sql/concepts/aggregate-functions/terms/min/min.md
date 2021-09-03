---
Title: 'MIN()'
Description: 'Returns the smallest value in a column.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'SQLite'
  - 'PostgreSQL'
  - 'MySQL'
  - 'Functions'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The `MIN()` aggregate function takes the name of a column as an argument and returns the smallest value in a column.

## Syntax

```sql
SELECT MIN(column_name)
FROM table_name;
```

The opposite of `MIN()` is `MAX()`.

## Example

For instance, suppose there's a `transactions` table with the following values:

| date       | amount |
| ---------- | ------ |
| 2023-01-30 | 2.75   |
| 2023-01-31 | 6.00   |
| 2023-01-31 | 4.20   |

The given query will return the smallest value from the `amount` column:

```sql
SELECT MIN(amount)
FROM transactions;
```

The result would be:

| MIN(amount) |
| ----------- |
| 2.75        |
