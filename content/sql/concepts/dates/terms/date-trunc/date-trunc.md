---
Title: 'DATE_TRUNC()'
Description: 'Function to truncate a date, time, or timestamp to a specified interval (e.g. day or week). Available in PostgreSQL and SQL Server.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Date'
  - 'Queries'
  - 'PostgreSQL'
  - 'SQL Server'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

The **`DATE_TRUNC()`** function is used to truncate a date, time, or timestamp to a specified interval, such as the day, week, or month, in PostgreSQL and SQL Server.

The `DATE_TRUNC()` function is particularly useful for time series analysis to understand how a value changes over time. Practical examples would include analyzing company's quarterly sales or determining the average hourly temperature.

> **Note:** The syntax varies slightly by SQL flavor; in PostgreSQL, the function is `DATE_TRUNC()`, while SQL Server uses the `DATETRUNC()` function without an underscore. MySQL does not have a `DATE_TRUNC()` function, but MySQL's `EXTRACT()` function is a commonly used alternative.

## PostgreSQL Syntax

```pseudo
DATE_TRUNC(interval, date)
```

The **`DATE_TRUNC()`** function in PostgreSQL has two required parameters:

- `interval` is the date or time interval to which the `date` will be truncated. Any of the following dateparts are valid inputs:
  - `microseconds`
  - `milliseconds`
  - `second`
  - `minute`
  - `hour`
  - `day`
  - `week`
  - `month`
  - `quarter`
  - `year`
  - `decade`
  - `century`
  - `millennium`
- `date` is the date, time, or timestamp to truncate.

By default, the date will be truncated with respect to its current time zone.

### Example 1

The following example truncates `2023-07-23 07:08:30` by year:

```sql
SELECT DATE_TRUNC('year', '2023-07-23 07:08:30');
/* Output: 2023-01-01 00:00:00 */
```

### Example 2

The following example truncates `2023-07-23 07:08:30` by minute:

```sql
SELECT DATE_TRUNC('minute', '2023-07-23 07:08:30');
/* Output: 2023-07-23 07:08:00 */
```

### Example 3

Assume there is a table called `fruit_sales` with the following data:

| item   | sale_price | sale_date           |
| ------ | ---------- | ------------------- |
| Apple  | 1.50       | 2023-07-23 10:02:21 |
| Banana | 1.00       | 2023-07-23 10:23:00 |
| Apple  | 1.50       | 2023-07-23 11:35:10 |
| Banana | 1.00       | 2023-07-23 11:45:51 |
| Banana | 1.00       | 2023-07-23 11:58:20 |

The **`DATE_TRUNC()`** function can be used to summarize how much money the fruit stand is making each hour of a given day:

```sql
SELECT DATE_TRUNC('hour', sale_date) as fruit_sale_hour_at,
   SUM(sale_price) AS sum_of_fruit_sales
FROM fruit_sales
GROUP BY fruit_sale_hour_at
```

This returns the `sale_date`, truncated by hour, as `fruit_sale_hour_at`, and the total cost of the fruit sold during that hour:

| fruit_sale_hour_at  | sum_of_fruit_sales |
| ------------------- | ------------------ |
| 2023-07-23 10:00:00 | 2.50               |
| 2022-07-23 11:00:00 | 3.50               |

Based on this analysis, the fruit stand made more money ($3.50) from 11 am to noon than in the previous hour, from 10 am to 11 am ($2.50).

## SQL Server Syntax

```pseudo
DATETRUNC(interval, date)
```

The **`DATETRUNC()`** function in SQL Server has the same functionality and required parameters as **`DATE_TRUNC()`** in PostgreSQL, but does not have an underscore in the function name.

### Example - SQL Server Variant

The following example truncates `2023-07-23 07:08:30` by year in SQL Server:

```sql
SELECT DATETRUNC('year', '2023-07-23 07:08:30');
/* Output: 2023-01-01 00:00:00 */
```
