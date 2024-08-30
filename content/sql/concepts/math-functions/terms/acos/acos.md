---
Title: 'ACOS()'
Description: 'Returns the arccosine of a given angle.'
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

The SQL function **`ACOS()`** calculates the arccosine of a given value, expressed in radians.

## Syntax

```pseudo
ACOS(value);
```

`value` is the number, for which the arccosine is calculated. This input value must be between -1 and 1, or the function will return `NULL`.

> **Note:** The output value of the `ACOS()` function uses radians, not degrees. To convert radians to degrees, the radian value can be multiplied by 180/π.

## Example

The following example uses the data given in the table `values`:

| id  | input_value |
| --- | ----------- |
| 1   | 0.8         |
| 2   | 1           |
| 3   | -0.5        |

The `ACOS()` function is used to calculate the arccosine as the `output_value`:

```sql
SELECT id, input_value, ACOS(input_value) AS output_value
FROM values;
```

The output will be:

| id  | input_value | output_value |
| --- | ----------- | ------------ |
| 1   | 0.8         | 0.643501109  |
| 2   | 1           | 0            |
| 3   | -0.5        | 2.0943951    |

> **Note:** For the use of this method with SQL databases like MySQL, SQLite, PostgreSQL, or SQL Server, refer to their respective documentation for more details on the `ACOS()` function implementation and compatibility.
