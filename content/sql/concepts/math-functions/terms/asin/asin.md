---
Title: 'ASIN()'
Description: 'Returns the arcsine of a number.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'SQLite'
  - 'PostgreSQL'
  - 'MySQL'
  - 'Functions'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`ASIN()`** function in SQL is a mathematical function that returns the inverse sine or arcsine of a number.

## Syntax

```pseudo
ASIN(number)
```

The specified `number` must be between -1 and 1, otherwise this function returns `NULL`.

## Example

In this example, the following data is given in the `numbers` table:

| id  | input_number |
| --- | ------------ |
| 1   | 0.6          |
| 2   | 1            |
| 3   | -0.9         |

The `ASIN()` function is used to calculate the arcsine as `output_number`:

```sql
SELECT id, input_number, ASIN(input_number) AS output_number
FROM numbers;
```

The output will be:

| id  | input_number | output_number       |
| --- | ------------ | ------------------- |
| 1   | 0.6          | 0.64350110879328437 |
| 2   | 1            | 1.5707963267948966  |
| 3   | -0.9         | -1.1197695149986342 |

> **Note:** For the use of this method with SQL databases like MySQL, SQLite, PostgreSQL, or SQL Server, refer to their respective documentation for more details on the `ASIN()` function implementation and compatibility.
