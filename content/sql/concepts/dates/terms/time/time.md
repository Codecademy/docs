---
Title: 'TIME()'
Description: 'Converts timestamps to time (hh:mm:ss).'
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

The `TIME()` function allows us to extract just the time portion of a time string, which consists of the hour, minute, and second (hh:mm:ss).

## Syntax

```sql
SELECT TIME('2020-09-01 17:38:22');
-- 17:38:22
```

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
SELECT TIME(order_date)
FROM bodega;
```

This would return the time for the `order_date` column.

| TIME(order_date) |
| ---------------- |
| 08:04:23         |
| 09:43:00         |
| 11:25:12         |
| 11:45:41         |
| 12:18:50         |
