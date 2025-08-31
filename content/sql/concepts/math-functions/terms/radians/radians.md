---
Title: 'RADIANS()'
Description: 'Converts a numeric value from degrees to radians in SQL.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'SQL'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The SQL **`RADIANS()`** function converts an angle in degrees to its equivalent in radians.

## Syntax

```pseudo
RADIANS(angle_in_degrees)
```

**Parameters:**

- `angle_in_degrees`: A numeric expression representing the angle in degrees to be converted.

**Return value:**

- Returns a numeric value representing the corresponding angle in radians.

## Example 1

The following query converts 180 degrees to radians:

```sql
SELECT RADIANS(180) AS radians_value;
```

The output will be:

| radians_value |
| ------------- |
| 3.141593      |

It shows that 180 degrees is equal to 3.141593 radians.

> **Note:** The exact output may vary slightly depending on the database system’s floating-point precision.

## Example 2

Convert a column of degree values to radians:

Suppose there is a table named `angles` with the following data:

| angle |
| ----- |
| 30    |
| 45    |
| 60    |

The following query converts this data to radians:

```sql
SELECT angle, RADIANS(angle) AS radians_value
FROM angles;
```

The output will be:

| angle | radians_value |
| ----- | ------------- |
| 30    | 0.523599      |
| 45    | 0.785398      |
| 60    | 1.047198      |
