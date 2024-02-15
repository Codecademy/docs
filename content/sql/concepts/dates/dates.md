---
Title: 'Dates'
Description: 'Dates in SQL are often written in the following format: DATE: YYYY-MM-DD or DATETIME: YYYY-MM-DD hh:mm:ss. We can use SQL’s date functions to transform data into a desired format. Since date functions can be database specific, verify the functions that exist on your relational database management system.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dates'
  - 'Documentation'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

Dates in SQL are often written in the following format:

- `DATE`: YYYY-MM-DD
- `DATETIME`: YYYY-MM-DD hh:mm:ss

We can use SQL’s date functions to transform data into a desired format. Since date functions can be database specific, verify the functions that exist on your relational database management system.

For example, suppose there's a `bodega` table with the following data:

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

This would return just the time from the `order_date` column.

| TIME(order_date) |
| ---------------- |
| 08:04:23         |
| 09:43:00         |
| 11:25:12         |
| 11:45:41         |
| 12:18:50         |
