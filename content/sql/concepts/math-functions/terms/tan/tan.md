---
Title: 'TAN()'
Description: 'Returns the tangent of an angle given in radians.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'SQL'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
  - 'Functions'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The SQL **`TAN()`** function is a mathematical function that returns the tangent of an angle given in radians. It takes one argument, the angle, and returns the tangent value as a numeric result.

## Syntax

```sql
SELECT TAN(angle);
```

`angle` is the radian value, for which the tangent is calculated.

> **Note:** The `TAN()` function operates using radians as its input, not degrees. To convert degrees to radians, the degree value can be multiplied by π/180.

## Example

In this example the following data is given in the table `angles`:

| id  | angle_in_degrees |
| --- | ---------------- |
| 1   | 80               |
| 2   | 45               |
| 3   | 170              |

The `TAN()` function can be used to calculate the `tangent_value`:

```sql
SELECT id, angle_in_degrees, TAN(angle_in_degrees * (PI()/180)) AS tangent_value
FROM angles;
```

The output will be:

| id  | angle_in_degrees | tangent_value      |
| --- | ---------------- | ------------------ |
| 1   | 80               | 5.67128181961771   |
| 2   | 45               | 1.0                |
| 3   | 170              | -0.176326980708465 |

> **Note:** For the use of this method with SQL databases like MySQL, PostgreSQL, SQLite, or SQL Server, refer to their respective documentation for more details on the `TAN()` function implementation and compatibility.
