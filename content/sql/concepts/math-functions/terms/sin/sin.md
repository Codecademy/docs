---
Title: 'SIN()'
Description: 'Returns the sine of an angle.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'SQL'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
  - 'Math Functions'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`SIN()`** function in SQL is a mathematical function that returns the sine of an angle. It is compatible with various SQL database systems such as MySQL, PostgreSQL, Oracle, and SQL Server.

## Syntax

```pseudo
SIN(angle)
```

Where `angle` is the angle in radians.

## Example

In this example, we have a table called `angles` that contains the following angles in degrees:

| angle |
| ----- |
| 30    |
| 45    |
| 60    |

Below, the `SIN()` function is used to calculate the sine of each angle:

```sql
SELECT angle, SIN(angle) AS sine_value
FROM angles;
```

The output will be:

| angle | sine_value |
| ----- | ---------- |
| 30    | 0.5        |
| 45    | 0.70710678 |
| 60    | 0.8660254  |

The `SIN()` function calculates the sine of each angle in degrees and returns the corresponding sine values.

> **Note:** For the use of this method with SQL databases like MySQL, PostgreSQL, SQLite, or SQL Server, refer to their respective documentation for more details on the `SIN()` function implementation and compatibility.
