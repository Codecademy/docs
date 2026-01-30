---
Title: 'ADDDATE()'
Description: 'Adds a specific interval to a given date.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Date'
  - 'MySQL'
  - 'Queries'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**`ADDDATE()`** function returns a new date by adding a specified time interval (such as days, months, or years) to a given date.

## Syntax

There are two versions of this operator:

```pseudo
ADDDATE(date, days);
```

Or, alternatively:

```pseudo
ADDDATE(date, INTERVAL value unit);
```

**Parameters:**

- `date` (required): the date or datetime value (see [SQL Date Formats](https://www.codecademy.com/resources/docs/sql/date-format) for more information)
- `days` (required): the number of days to add to `date`
- `unit` (required): the unit of date/time to add
  - The specified unit is one of the following:
    - `MICROSECOND`
    - `SECOND`
    - `MINUTE`
    - `HOUR`
    - `DAY`
    - `WEEK`
    - `MONTH`
    - `QUARTER`
    - `YEAR`
    - `SECOND_MICROSECOND`
    - `MINUTE_MICROSECOND`
    - `MINUTE_SECOND`
    - `HOUR_MICROSECOND`
    - `HOUR_SECOND`
    - `HOUR_MINUTE`
    - `DAY_MICROSECOND`
    - `DAY_SECOND`
    - `DAY_MINUTE`
    - `DAY_HOUR`
    - `YEAR_MONTH`
- `value` (required): the value of the given date/time interval (`unit`) to add

> **Note:** `ADDDATE()` is specific to MySQL. A similar function exists in SQL Server under the function [`DATEADD`](https://www.codecademy.com/resources/docs/sql/dates/dateadd) which has its own set of parameters.

## Example 1: Adding days to a date

In this example, `ADDDATE()` adds 7 days to a given date:

```sql
-- Using days = 5
SELECT ADDDATE('2026-01-16', 5);

-- Using value = 5 and unit = DAY
SELECT ADDDATE('2026-01-16', INTERVAL 5 DAY);
```

This will return the following output:

```shell
+--------------------------+
| ADDDATE('2026-01-16', 5) |
+--------------------------+
| 2026-01-21               |
+--------------------------+
+---------------------------------------+
| ADDDATE('2026-01-16', INTERVAL 5 DAY) |
+---------------------------------------+
| 2026-01-21                            |
+---------------------------------------+
```

In the same vein, `ADDDATE(date, 7)` and `ADDDATE(date, INTERVAL 1 WEEK)` will return the same result, as well as both `ADDDATE(datetime, INTERVAL 60 SECOND)` and `ADDDATE(datetime, INTERVAL 1 MINUTE)`.

## Example 2: Using all supported formats

In this example, `ADDDATE()` is used with different valid syntax formats:

```sql
SELECT
  ADDDATE('2026-09-25 14:00:00', INTERVAL '7 1' DAY_HOUR) AS day_hour_result,
  ADDDATE('2026-09-25', INTERVAL '1-1' YEAR_MONTH) AS year_month_result,
  ADDDATE('2026-09-25 14:00:00', INTERVAL '6:23:42' HOUR_SECOND) AS hour_second_result,
  ADDDATE('2026-09-25 16:00:00', INTERVAL '2.837' SECOND_MICROSECOND) AS second_microsecond_result;
```

```shell
+---------------------+-------------------+---------------------+----------------------------+
| day_hour_result     | year_month_result | hour_second_result  | second_microsecond_result  |
+---------------------+-------------------+---------------------+----------------------------+
| 2026-10-02 15:00:00 | 2027-10-25        | 2026-09-25 20:23:42 | 2026-09-25 16:00:02.837000 |
+---------------------+-------------------+---------------------+----------------------------+
```

## Example 3: Updating arrival times in a table

Suppose a table stores bus routes and their scheduled arrival times:

```sql
CREATE TABLE sd_bus_routes (
  ROUTE_ID INT PRIMARY KEY,
  ROUTE_NAME VARCHAR(100),
  ARRIVAL_TIME DATETIME
);

INSERT INTO sd_bus_routes
VALUES
  (1, 'Fashion Valley - La Mesa', '2026-08-28 16:11:00'),
  (2, 'Downtown - North Park', '2026-08-28 16:14:00'),
  (3, 'UCSD Med. Ctr. / Hillcrest Euclid Trolley', '2026-08-28 16:26:00');
```

Due to traffic delays, a new column is added to store updated arrival times:

```sql
ALTER TABLE sd_bus_routes
ADD UPDATED_ARRIVAL_TIME DATETIME;
```

Each route is delayed by a different number of minutes. The updated times are calculated using `ADDDATE()`:

```sql
UPDATE sd_bus_routes
SET UPDATED_ARRIVAL_TIME =
  CASE
    WHEN ROUTE_ID = 1 THEN ADDDATE(ARRIVAL_TIME, INTERVAL 10 MINUTE)
    WHEN ROUTE_ID = 2 THEN ADDDATE(ARRIVAL_TIME, INTERVAL 12 MINUTE)
    WHEN ROUTE_ID = 3 THEN ADDDATE(ARRIVAL_TIME, INTERVAL 15 MINUTE)
  END;
```

The output will be:

```shell
| ROUTE_ID | ARRIVAL_TIME        | UPDATED_ARRIVAL_TIME |
| -------- | ------------------- | -------------------- |
| 1        | 2026-08-28 16:11:00 | 2026-08-28 16:21:00  |
| 2        | 2026-08-28 16:14:00 | 2026-08-28 16:26:00  |
| 3        | 2026-08-28 16:26:00 | 2026-08-28 16:41:00  |
```
