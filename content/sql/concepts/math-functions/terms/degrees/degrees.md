---
Title: 'DEGREES()'
Description: 'Converts an angle from radians to degrees.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Functions'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
  - 'SQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`DEGREES()`** function in SQL is a mathematical function used to convert a value expressed in radians to its equivalent in degrees. This function is available in various SQL dialects, including SQL Server, MySQL, and Oracle.

> **Note:** Functions `RADIANS()` and `PI()` are closely related to `DEGREES()`.

## Syntax

```pseudo
 DEGREES(number)
```

**Parameters:**

- `number`: A numeric expression in radians to be converted to degrees.

**Return value:**

Returns the angle in degrees as a numeric value.

## Example 1

This example converts a specific radian value to degrees:

```sql
Select DEGREES(1.0) as degrees_value;
```

The output:

| <center>degrees_value</center>     |
| ---------------------------------- |
| <center>57.29577951308232</center> |

## Example 2

This query converts PI\*2 radians to degrees:

```sql
SELECT DEGREES(PI()*2) as degrees_off_of_pi;
```

The output:

| <center>degrees_off_of_pi</center> |
| ---------------------------------- |
| <center>360</center>               |
