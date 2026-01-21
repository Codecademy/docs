---
Title: 'SUBDATE()'
Description: 'Subtract a specific time interval (like days, months, or years) from a given date'
Subjects:
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

**Parameters:**

- `date`: The starting date or datetime value.
- `value`: The amount of time to subtract.
- `unit`: The unit of time to subtract (e.g., `DAY`, `MONTH`, `YEAR`, `HOUR` etc).

**Note:**

- This function works the same as `DATE_SUB()`.
- This syntax is specific to MySQL. Other databases like SQL Server use `DATEADD()` with negative numbers.

## Example 1 - String Format

```sql
SELECT SUBDATE('2026-01-21', INTERVAL 1 MONTH);
```

```shell
2025-12-21
```

## Example 2 - Shorthand Syntax

If using the shorthand syntax (without `INTERVAL`), the second argument is treated strictly as days.

```sql
SELECT SUBDATE('2026-01-21', 10);
```

```shell
2026-01-11
```

## Codebyte Example

Run the lines below to see the function in action.

```codebyte/sql
SELECT SUBDATE('2026-05-15', INTERVAL 1 YEAR);
SELECT SUBDATE('2026-01-21 12:00:00', INTERVAL 3 HOUR);
SELECT SUBDATE(NOW(), INTERVAL 1 HOUR);
```
