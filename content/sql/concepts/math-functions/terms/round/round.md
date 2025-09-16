---
Title: 'ROUND()'
Description: 'Returns the number rounded to the specified number of decimal places.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The SQL math function **`ROUND()`** returns the number rounded to the specified number of decimal places. If no decimal places are provided, the number is rounded without decimals.

> **Note:** In some RDBMS like SQL Server, there may be an optional third parameter to truncate instead of round.

## Syntax

```pseudo
ROUND(number, decimals)
```

**Parameters:**

- `number`: The number to be rounded.
- `decimals` (optional): The number of decimal places to round to.

**Return value:**

Returns the number rounded to the specified number of decimal places.

## Example 1

In this example, the `ROUND()` function is used with a single argument:

```sql
SELECT ROUND(25.50);
```

The output this code generates is:

| ROUND(25.50) |
| ------------ |
| 26           |

> **Note:** When no decimal places are provided, `ROUND()` returns the nearest integer.

## Example 2

In this example, the following data is given in the `sales` table:

| id  | total   |
| --- | ------- |
| 1   | 123.456 |
| 2   | 987.654 |

The `ROUND()` function is used with the second optional argument `decimals`, setting the number of decimal places to 1:

```sql
SELECT id, ROUND(total, 1) AS total_rounded FROM sales;
```

In this SQL statement, the total values are rounded to get the `total_rounded`. The [`AS`](https://www.codecademy.com/resources/docs/sql/commands/as) keyword is used to name the resulting column `total_rounded` in the output.

The output will be:

| id  | total_rounded |
| --- | ------------- |
| 1   | 123.5         |
| 2   | 987.7         |
