---
Title: 'SUBDATE()'
Description: 'Subtract a specific time interval (like days, months, or years) from a given date.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'MySQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`SUBDATE()`** function returns a date or datetime value after subtracting a specified time interval from a starting date. It is commonly used in queries that need to calculate past dates, such as filtering records from a certain number of days, months, or years before a given date.

## Syntax

```pseudo
SUBDATE(date, INTERVAL value unit)
```

Or, alternatively:

```pseudo
SUBDATE(date, days)
```

**Parameters:**

- `date`: The starting `DATE` or `DATETIME` value.
- `value`: The amount of time to subtract.
- `unit`: The unit of time to subtract, such as `DAY`, `MONTH`, `YEAR`, or `HOUR`.
- `days`: An integer value representing the number of days to subtract.

**Return value:**

- Returns a `DATE` when the input is a date.
- Returns a `DATETIME` when the input includes a time component.

## Example 1: Subtracting a Month from a Date

In this example, `SUBDATE()` subtracts one month from a given date and returns the resulting date:

```sql
SELECT SUBDATE('2026-01-21', INTERVAL 1 MONTH);
```

The output of this code is:

```shell
2025-12-21
```

## Example 2: Shorthand Syntax (Days Only)

In this example, `SUBDATE()` subtracts a specified number of days from a date using the shorthand numeric syntax:

```sql
SELECT SUBDATE('2026-01-21', 10);
```

The output of this code is:

```shell
2026-01-11
```

## Example 3: Using Different Time Units

In this example, `SUBDATE()` subtracts different time units such as years and hours from date and datetime values, including the current date and time:

```sql
SELECT SUBDATE('2026-05-15', INTERVAL 1 YEAR);
SELECT SUBDATE('2026-01-21 12:00:00', INTERVAL 3 HOUR);
SELECT SUBDATE(NOW(), INTERVAL 1 HOUR);
```

The output of this code is:

```shell
2025-05-15
2026-01-21 09:00:00
2026-01-22 11:05:30
```
