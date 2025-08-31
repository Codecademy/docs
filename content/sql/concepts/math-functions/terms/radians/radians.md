---
Title: 'RADIANS()'
Description: 'Converts a numeric value from degrees to radians in SQL.'
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

The **`RADIANS()`** is a mathematical function in SQL that converts an angle in degrees to its equivalent angle in radians.

## Syntax

```sql
RADIANS(angle_in_degrees)
```

Where `angle_in_degrees` is the angle in degrees to be converted to radians.

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

## Example 2

Convert a column of degree values to radians:
Suppose you have a table called `angles` with the following data:

| angle |
| ----- |
| 30    |
| 45    |
| 60    |

You can convert each value to radians using:

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
