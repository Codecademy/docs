---
Title: 'DATETIME()'
Description: 'Returns the both the date and time (YYYY-MM-DD hh:mm:ss).'
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

The `DATETIME()` function returns the entire time string which includes the date and time portions (YYYY-MM-DD hh:mm:ss)

## Syntax

```sql
SELECT DATETIME('2020-09-01 17:38:22');
-- 2020-09-01 17:38:22
```

To obtain the current date and time, you can provide the string `'now'` to the function, which returns the date and time in UTC.

```sql
SELECT DATETIME('now');
-- 2022-01-01 00:00:00
```

To obtain the date and time converted to your local timezone, you can provide a modifier `localtime`.

```sql
SELECT DATETIME('now', 'localtime');
-- 2022-01-01 02:00:00
```

## Modifiers

### Shift Dates

The following modifiers can be used to shift the date backwards to a specified part of the date.

- `start of year`: shifts the date to the beginning of the current year.
- `start of month`: shifts the date to the beginning of the current month.
- `start of day`: shifts the date to the beginning of the current day.

### Offsets

The following modifiers add a specified amount to the date and time of the time string.

- `'+-N years'`: offsets the year
- `'+-N months'`: offsets the month
- `'+-N days'`: offsets the day
- `'+-N hours'`: offsets the hour
- `'+-N minutes'`: offsets the minute
- `'+-N seconds'`: offsets the second

## Example 1

For example, suppose there’s a `bodega` table with the following data:

| order_id | item         | price | quantity | order_date          |
| -------- | ------------ | ----- | -------- | ------------------- |
| 1        | Donut        | 2.49  | 2        | 2022-08-16 08:04:23 |
| 2        | Cookie       | 0.99  | 3        | 2022-08-16 09:43:00 |
| 3        | Donut        | 2.49  | 1        | 2022-08-16 11:25:12 |
| 4        | Egg Sandwich | 7.99  | 1        | 2022-08-17 11:45:41 |
| 5        | Ice Coffee   | 3.99  | 2        | 2022-08-17 12:18:50 |

```sql
SELECT DATETIME(order_date)
FROM bodega;
```

This would return the time for the `order_date` column.

| TIME(order_date)    |
| ------------------- |
| 2022-08-16 08:04:23 |
| 2022-08-16 09:43:00 |
| 2022-08-16 11:25:12 |
| 2022-08-17 11:45:41 |
| 2022-08-17 12:18:50 |

## Example 2

```sql
SELECT DATETIME('2020-02-10', 'start of month', '-1 day', '+7 hours');
```

- First, it will apply the modifier `'start of month'` which will shift to the beginning of the month, `'2020-02-01 00:00:00'`. It will include the time portion because we are using the `DATETIME()` function.
- Then, it will apply the modifier `'-1 day'` which will offset the day by -1, resulting in `'2020-01-31 00:00:00'`.
- Finally, it will apply the modifier `'+7 hours'`, which will add 7 hours to the time, giving the final result of `'2020-01-31 07:00:00'`.
