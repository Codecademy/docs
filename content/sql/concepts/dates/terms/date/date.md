---
Title: 'DATE()'
Description: 'Converts timestamps to dates (YYYY-MM-DD).'
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
  - 'paths/design-databases-with-postgresql'
---

The `DATE()` function extracts just the date portion of a time string, which consists of the year, month, and day (YYYY-MM-DD).

## Syntax

```sql
SELECT DATE('2022-09-01 17:38:22');
-- Result: 2022-09-01
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
SELECT DATE(order_date),
   COUNT(*) AS 'count_baked_goods'
FROM bodega
GROUP BY DATE(order_date);
```

This would return the different dates from the `order_date` column and the total number of rows with each date:

| DATE(order_date) | count_baked_goods |
| ---------------- | ----------------- |
| 2022-08-16       | 3                 |
| 2022-08-17       | 2                 |
