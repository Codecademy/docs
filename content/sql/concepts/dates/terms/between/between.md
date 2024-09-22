---
Title: 'BETWEEN()'
Description: 'Returns records where a specified value is within a given range, including the boundary values.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Date'
  - 'Queries'
  - 'SQL Server'
  - 'MySQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

The **`BETWEEN()`** operator is used to find values within a given range. The values can be numbers, texts, or dates.

The **`BETWEEN()`** operator is _inclusive_. Both begin and end values are included.

## Syntax

```sql
SELECT column_name(s) from table_name where column_name between value1 and value2;
```

> **Note** The basic syntax for `BETWEEN()` is generally same across most databases, but some differences may arise depending on how each database handles specific data types or expressions. You have to look for Data handling, Null handling, Case Sensitivity and Collations when using the operator on your database.

## Example

For example, suppose there’s a `bodega` table with the following data:

| order_id | item         | price | quantity | order_date          |
| -------- | ------------ | ----- | -------- | ------------------- |
| 1        | Donut        | 2.49  | 2        | 2022-08-16 08:04:23 |
| 2        | Cookie       | 0.99  | 3        | 2022-08-21 09:43:00 |
| 3        | Donut        | 2.49  | 1        | 2022-08-18 11:25:12 |
| 4        | Egg Sandwich | 7.99  | 1        | 2022-08-20 11:45:41 |
| 5        | Ice Coffee   | 3.99  | 2        | 2022-08-17 12:18:50 |

```sql
SELECT * FROM bodega WHERE order_date BETWEEN '2022-08-15' AND '2022-08-19';
```

This would return all records from the **bodega** table where the `order_date` is between August 15, 2022, and August 19, 2022 (inclusive).

| order_id | item       | price | quantity | order_date          |
| -------- | ---------- | ----- | -------- | ------------------- |
| 1        | Donut      | 2.49  | 2        | 2022-08-16 08:04:23 |
| 3        | Donut      | 2.49  | 1        | 2022-08-18 11:25:12 |
| 5        | Ice Coffee | 3.99  | 2        | 2022-08-17 12:18:50 |
