---
Title: 'DATEDIFF()'
Description: 'Calculates and returns the difference between two date values. Available in SQL Server and MySQL.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Date'
  - 'Queries'
  - 'MySQL'
  - 'SQL Server'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

**`DATEDIFF()`** is a function found in SQL Server and MySQL that calculates and returns the difference between two date values.

## SQL Server Syntax

```pseudo
DATEDIFF(datePart, date1, date2)
```

The `DATEDIFF()` function in SQL Server has three required parameters:

- `datePart` is the part of the date to return. It can be one of the following formats:
  - Year: `year`, `yyyy`, `yy`
  - Quarter: `quarter`, `qq`, `q`
  - Week: `week`, `ww`, `wk`
  - Weekday: `weekday`, `dw`, `w`
  - Second: `second`, `ss`, `s`
  - Month: `month`, `mm`, `m`
  - Minute: `minute`, `mi`, `n`
  - Millisecond: `millisecond`, `ms`
  - Hour: `hour`, `hh`
  - Day of Year: `dayofyear`
  - Day: `day`, `dy`, `y`
- `date1` and `date2` are the dates to compare. It can be in several formats, one being the `yyyy/mm/dd` format.

### Example 1

The following example calculates the difference in months between `2020/05/18` and `2022/05/18`:

```sql
SELECT DATEDIFF(month, '2020/05/18', '2022/05/18'); /* Output: 24 */
```

### Example 2

The following example returns the difference in seconds between `2021/09/30 08:22:04` and `2021/09/30 08:25:06`:

```sql
SELECT DATEDIFF(second, '2021/09/30 08:22:04', '2021/09/30 08:25:06'); /* Output: 182 */
```

## MySQL Syntax

MySQL only requires two date parameters in the `DATEDIFF()` function and will return the number of days between `date1` and `date2`.

```pseudo
DATEDIFF(date1, date2)
```

### Example

The following example returns the difference in days between `2019-07-05` and `2018-12-24`:

```sql
SELECT DATEDIFF("2019-07-05", "2018-12-24"); /* Output: 193 */
```
