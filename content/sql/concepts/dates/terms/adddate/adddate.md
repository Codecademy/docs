---
Title: 'ADDDATE()'
Description: 'Adds a specific interval to a given date.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Date'
  - 'Queries'
  - 'SQL Server'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**`ADDDATE()`** in SQL returns a new date by adding a specified time interval (such as days, months, or years) to a given date.

## Syntax

There are two versions of this operator.

```pseudo
SELECT ADDDATE(date, days);
```

...or...

```pseudo
SELECT ADDDATE(date, INTERVAL value unit);
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

> Note: `ADDDATE` is specific to MySQL. A similar function exists in SQL Server under the function [`DATEADD`](https://www.codecademy.com/resources/docs/sql/dates/dateadd) which has its own set of parameters.

## Example 1

Let's add a few days to the date `2026-01-16`. This can be achieved using both `ADDDATE()` variations.

```sql
-- Using days = 5
SELECT ADDDATE('2026-01-16', 5);

-- Using value = 5 and unit = DAY
SELECT ADDDATE('2026-01-16', INTERVAL 5 DAY);
```

Both queries will return the following output:

```shell
2026-01-21
```

In the same vein, `ADDDATE(date, 7)` and `ADDDATE(date, INTERVAL 1 WEEK)` will return the same result, as well as both `ADDDATE(datetime, INTERVAL 60 SECOND)` and `ADDDATE(datetime, INTERVAL 1 MINUTE)`.

## Example 2

The parameter `unit` can be one of the following composite interval expressions and their respective formats.

| expression           | format                               |
| -------------------- | ------------------------------------ |
| `SECOND_MICROSECOND` | `SECOND.MICROSECOND`                 |
| `MINUTE_MICROSECOND` | `MINUTE:SECOND.MICROSECOND`          |
| `MINUTE_SECOND`      | `MINUTE:SECOND`                      |
| `HOUR_MICROSECOND`   | `HOUR:MINUTE:SECOND.MICROSECOND`     |
| `HOUR_SECOND`        | `HOUR:MINUTE:SECOND`                 |
| `HOUR_MINUTE`        | `HOUR:MINUTE`                        |
| `DAY_MICROSECOND`    | `DAY HOUR:MINUTE:SECOND.MICROSECOND` |
| `DAY_SECOND`         | `DAY HOUR:MINUTE:SECOND`             |
| `DAY_MINUTE`         | `DAY HOUR:MINUTE`                    |
| `DAY_HOUR`           | `DAY HOUR`                           |
| `YEAR_MONTH`         | `YEAR-MONTH`                         |

`DAY_HOUR` example:

```sql
-- '7 1' is 7 days and 1 hour
SELECT ADDDATE('2026-09-25 14:00:00', INTERVAL '7 1' DAY_HOUR);
```

```shell
2026-10-02 15:00:00
```

`YEAR_MONTH` example:

```sql
-- '1-1' is 1 year and 1 month
SELECT ADDDATE('2026-09-25', INTERVAL '1-1' YEAR_MONTH)
```

```shell
2027-10-25
```

`HOUR_SECOND` example:

```sql
-- '6:23:42' is 6 hours, 23 minutes and 42 seconds
SELECT ADDDATE('2026-09-25 14:00:00', INTERVAL '6:23:42' HOUR_SECOND);
```

```shell
2026-09-25 20:23:42
```

`SECOND_MICROSECOND` example:

```sql
-- '2.837' is 2 seconds and 837 microseconds
SELECT ADDDATE('2026-09-25 16:00:00', INTERVAL '2.837' SECOND_MICROSECOND);
```

```shell
2026-09-25 16:00:02.837000
```

## Example 3

Consider the following list of San Diego bus routes and their arrival times. This table will be named `sd_bus_routes`.

```sql
-- Create table
CREATE TABLE sd_bus_routes (
  ROUTE_ID INT PRIMARY KEY,
  ROUTE_NAME VARCHAR(100),
  ARRIVAL_TIME DATETIME
);

-- Insert bus routes
INSERT INTO sd_bus_routes (ROUTE_ID, ROUTE_NAME, ARRIVAL_TIME)
VALUES
  (1, 'Fashion Valley - La Mesa', '2026-08-28 16:11:00'),
  (2, 'Downtown - North Park', '2026-08-28 16:14:00'),
  (3, 'UCSD Med. Ctr. / Hillcrest Euclid Trolley', '2026-08-28 16:26:00');
```

```shell
| ROUTE_ID | ROUTE_NAME                                | ARRIVAL_TIME        |
| -------- | ----------------------------------------- | ------------------- |
| 1        | Fashion Valley - La Mesa                  | 2026-08-28 16:11:00 |
| 2        | Downtown - North Park                     | 2026-08-28 16:14:00 |
| 3        | UCSD Med. Ctr. / Hillcrest Euclid Trolley | 2026-08-28 16:26:00 |
```

August 28, 2026 is a Friday and the timestamps are in the afternoon, so the conditions are right for expected delays. Let's add a new column to this table to reflect this.

```sql
-- Add new column
ALTER TABLE sd_bus_routes
ADD UPDATED_ARRIVAL_TIME DATETIME;
```

```shell
| ROUTE_ID | ROUTE_NAME                                | ARRIVAL_TIME        | UPDATED_ARRIVAL_TIME |
| -------- | ----------------------------------------- | ------------------- | -------------------- |
| 1        | Fashion Valley - La Mesa                  | 2026-08-28 16:11:00 | null                 |
| 2        | Downtown - North Park                     | 2026-08-28 16:14:00 | null                 |
| 3        | UCSD Med. Ctr. / Hillcrest Euclid Trolley | 2026-08-28 16:26:00 | null                 |
```

Let's say all three routes will be delayed due to San Diego traffic: route 1 by 10 minutes, route 2 by 12 minutes, and route 3 by 15 minutes. Let's update values in the new column by runing `ADDDATE` for each respective `ARRIVAL_TIME` value.

```sql
-- Set new arrival times
UPDATE sd_bus_routes
SET UPDATED_ARRIVAL_TIME =
(
  CASE
    WHEN ROUTE_ID = 1
      THEN ADDDATE(ARRIVAL_TIME, INTERVAL 10 MINUTE)
    WHEN ROUTE_ID = 2
      THEN ADDDATE(ARRIVAL_TIME, INTERVAL 12 MINUTE)
    WHEN ROUTE_ID = 3
      THEN ADDDATE(ARRIVAL_TIME, INTERVAL 15 MINUTE)
  END
);
```

The table now has the updated arrival times.

```shell
| ROUTE_ID | ROUTE_NAME                                | ARRIVAL_TIME        | UPDATED_ARRIVAL_TIME |
| -------- | ----------------------------------------- | ------------------- | -------------------- |
| 1        | Fashion Valley - La Mesa                  | 2026-08-28 16:11:00 | 2026-08-28 16:21:00  |
| 2        | Downtown - North Park                     | 2026-08-28 16:14:00 | 2026-08-28 16:26:00  |
| 3        | UCSD Med. Ctr. / Hillcrest Euclid Trolley | 2026-08-28 16:26:00 | 2026-08-28 16:41:00  |
```
