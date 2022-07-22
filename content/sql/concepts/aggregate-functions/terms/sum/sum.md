---
Title: 'SUM()'
Description: 'Returns the sum of all the value in that column.'
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

The `SUM()` aggregate function takes the name of a column as an argument and returns the sum of all the value in that column.

## Syntax

```sql
SELECT SUM(column_name)
FROM table_name;
```

## Example

For instance, suppose there's a `transactions` table with the following values:

| date       | amount |
| ---------- | ------ |
| 2023-01-30 | 2.75   |
| 2023-01-31 | 6.00   |
| 2023-01-31 | 4.20   |

The given query will return the sum of all values from the `amount` column:

```sql
SELECT SUM(amount)
FROM transactions;
```

The result would be:

| SUM(amount) |
| ----------- |
| 12.95       |
