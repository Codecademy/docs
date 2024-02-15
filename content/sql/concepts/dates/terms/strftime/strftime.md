---
Title: 'STRFTIME()'
Description: 'Returns a formatted date.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The `STRFTIME()` function returns a formatted date, as specified in a format string.

## Syntax

```sql
STRFTIME(format, timestring, modifier1, modifier2, ...)
```

- `format` is the format string.
- `timestring` is the column or the original value.
- The remaining arguments are 0 or more optional modifiers to transform the time string.

The substitutions to extract each part of the date and time are the following:

- `%Y` returns the year (YYYY)
- `%m` returns the month (01-12)
- `%d` returns the day of month (01-31)
- `%H` returns the hour (00-23)
- `%M` returns the minute (00-59)
- `%S` returns the second (00-59)

## Example

For example, suppose there’s a `bodega` table with the following data:

| order_id | item         | price | quantity | order_date          |
| -------- | ------------ | ----- | -------- | ------------------- |
| 1        | Donut        | 2.49  | 2        | 2022-08-16 08:04:23 |
| 2        | Cookie       | 0.99  | 3        | 2022-08-16 09:43:00 |
| 3        | Donut        | 2.49  | 1        | 2022-08-16 11:25:12 |
| 4        | Egg Sandwich | 7.99  | 1        | 2022-08-17 11:45:41 |
| 5        | Ice Coffee   | 3.99  | 2        | 2022-08-17 12:18:50 |

```sql
SELECT order_date,
  STRFTIME('%H', order_date)
FROM bodega;
```

This would return the time for the `order_date` column.

| order_date          | STRFTIME('%H', order_date) |
| ------------------- | -------------------------- |
| 2022-08-16 08:04:23 | 08                         |
| 2022-08-16 09:43:00 | 09                         |
| 2022-08-16 11:25:12 | 11                         |
| 2022-08-17 11:45:41 | 11                         |
| 2022-08-17 12:18:50 | 12                         |
