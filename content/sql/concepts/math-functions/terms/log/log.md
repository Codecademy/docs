---
Title: 'LOG()'
Description: 'Returns the natural logarithm of a given number.'
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

The **`LOG()`** function in SQL returns the natural logarithm of a given number, or the logarithm of the number to the specified base.

## Syntax

```pseudocode
LOG(number)

LOG(base,number)
```

The input value `number` refers to the value for which you want to calculate the logarithm. The number must be a positive real number greater than 0. It represents the value you want to find the exponent for.

The input value `base` represents the number to which the logarithm is being calculated. It determines the scale of the logarithm. The base must be a positive real number greater than 0, except for 1. The logarithm calculates the exponent to which the base must be raised to obtain the given number.

## Example 1

In this example, the following data is given in the `table_1` table:

| id  | number |
| --- | ------ |
| 1   | 1      |
| 2   | 10     |
| 3   | 22.6   |

The `LOG()` function is used to calculate the natural logarithm of each value in the `number` column:

```sql
SELECT number, LOG(number) AS log_num
FROM table_1;
```

The output will be:

| number | log_num            |
| ------ | ------------------ |
| 1      | 0.0                |
| 10     | 2.3025850929940459 |
| 22.6   | 3.1179499062782403 |

## Example 2

In this example, the following data is given in the `table_2` table:

| id  | base | number |
| --- | ---- | ------ |
| 1   | 2    | 1      |
| 2   | 4    | 2      |
| 3   | 3    | 27     |

The `LOG()` function is used to calculate the logarithm of the `number` value to the `base` value:

```sql
SELECT base,number,LOG(base,number) AS log_num
FROM table_2;
```

The output will be:

| base | number | log_num |
| ---- | ------ | ------- |
| 2    | 1      | 0.0     |
| 4    | 2      | 0.5     |
| 3    | 27     | 3.0     |

> **Note:** `LOG()` is compatible with various SQL database systems such as MySQL, PostgreSQL, Oracle, and SQL Server.
