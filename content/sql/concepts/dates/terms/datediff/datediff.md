---
Title: 'DATEDIFF()'
Description: 'Calculates the difference between two date values.'
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

The `DATEDIFF()` function calculates the difference between two date values.

## Syntax

```pseudo
DATEDIFF(datePart, date1, date2)
```

- `date1` and `date2` are the dates to compare.
- `datePart` is the part of the date to return. It can be one of the following formats:
  - Year: year, yyyy, yy
  - Quarter: quarter, qq, q
  - Week: week, ww, wk
  - Weekday: weekday, dw, w
  - Second: second, ss, s
  - Month: month, mm, m
  - Minute: minute, mi, n
  - Millisecond: millisecond, ms
  - Hour: hour, hh
  - Day of Year: dayofyear
  - Day: day, dy, y

## Example

The following example calculates the difference between `2020/05/18` and `2022/05/18` in the `month` format:

```sql
SELECT DATEDIFF(month, '2020/05/18', '2022/05/18'); /* Output: 24 */
```
