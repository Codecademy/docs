---
Title: "Dates"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Dates"
  - "Documentation"
CatalogContent:
  - "learn-sql"
  - "paths/analyze-data-with-sql"
---

Dates in SQL are often written in the following format:

- `DATE`: YYYY-MM-DD
- `DATETIME`: YYYY-MM-DD hh:mm:ss

We can use SQL’s date functions to transform data into a desired format. Since date functions can be database specific, verify the functions that exist on your relational database management system.

For example, suppose there's a `baked_goods` table with the following data:

| order_id | item | price | quantity | order_time | 
| --- | --- | --- | --- | --- |
| 1 | Donut | 2.99 | 2 | 2020-08-16 08:04:23 |
| 2 | Cookie | 0.99 | 3 | 2020-08-16 09:43:00 |
| 3 | Donut | 2.99 | 1 | 2020-08-16 11:25:12 |
| 4 | Egg Sandwich | 7.99 | 1 | 2020-08-16 11:45:41 |
| 5 | Ice Coffee | 3.95 | 1 | 2020-08-16 12:18:50 |

```sql
SELECT DATETIME(order_time)
FROM baked_goods;
```

This would return the date and time for the `order_time` column.
