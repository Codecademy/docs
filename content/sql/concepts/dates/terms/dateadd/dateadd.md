---
Title: 'DATEADD()'
Description: 'Returns a date/time interval added to a specified date. Versions are available in SQL Server and MySQL.'
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

The **`DATEADD()`** function in SQL Server and **`DATE_ADD()`** function in MySQL return a date/time interval that is added to a specified date.

## SQL Server Syntax

```pseudo
DATEADD(interval, amount, date)
```

The `DATEADD()` function in SQL Server has three parameters:

- `interval` is the date or time interval to add to `date`. It can be one of the following formats:
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
- `amount` is the amount of `interval` to add to `date`. A negative amount subtracts the interval from the date.
- `date` is the date being added to. It can be in several formats, one being the `yyyy/mm/dd` format.

### Example 1

The following example adds `10` months to `2022/06/22`:

```sql
SELECT DATEADD(month, 10, '2022/06/22');
/* Output: 2023-04-22 00:00:00.000 */
```

### Example 2

The following example adds `28` seconds to `1990/08/25 04:23:10`:

```sql
SELECT DATEADD(second, 28, '1990/08/25 04:23:10');
/* Output: 1990-08-25 04:23:38.000 */
```

### Example 3

Using a negative `amount` subtracts the `interval` from the `date`. The following example subtracts `24` years from `2022/12/07`:

```sql
SELECT DATEADD(year, -24, '2022/12/07');
/* Output: 1998-12-07 00:00:00.000 */
```

## MySQL Syntax

The `DATE_ADD()` function in MySQL has the following syntax:

```pseudo
DATE_ADD(date, INTERVAL value unit)
```

- `date` is the date being added to.
- `value` is the amount of the `unit` to add to `date`. A negative value subtracts the amount from the `date`.
- `unit` can be set to `YEAR`, `SECOND`, `MONTH`, `MINUTE`, `HOUR`, or `DAY`.

### Example 1

The following example adds `37` days to `2002-10-31`:

```sql
SELECT DATE_ADD("2002-10-31", INTERVAL 37 DAY);
/* Output: 2002-12-07 */
```

### Example 2

The following example adds `30` minutes to `2002-10-31 10:35:02`:

```sql
SELECT DATE_ADD("2002-10-31 10:35:02", INTERVAL 30 MINUTE);
/* Output: 2002-10-31 11:05:02 */
```

### Example 3

A negative `value` subtracts the specified amount from the `date`. The following example subtracts `4` months from `2000-03-15`:

```sql
SELECT DATE_ADD("2000-03-15", INTERVAL -4 MONTH);
/* Output: 1999-11-15 */
```
