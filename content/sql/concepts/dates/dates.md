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

```sql
SELECT DATETIME(order_time)
FROM baked_goods;
```

This would return the date and time for the `order_time` column.

## DATE()

We can use the `DATE()` function to easily convert timestamps to dates and complete the following query:

```sql
SELECT DATE(order_time), 
   COUNT(*) AS 'count_baked_goods'
FROM baked_goods
GROUP BY DATE(order_time);
```

## TIME()

Similarly, we can query the time with:

```sql
SELECT TIME(order_time), 
   COUNT(*) AS 'count_baked_goods'
FROM baked_goods
GROUP BY TIME(order_time);
```
