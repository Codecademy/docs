---
Title: 'LOG10()'
Description: 'Calculates the base-10 logarithm of a number.'
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

The **`LOG10()`** SQL function calculates the base-10 logarithm of a number.

## Syntax

```sql
LOG10(number)
```

The `LOG10()` function takes one required parameter, `number`:

- A `float` type number greater than `0`.
- An expression resulting in a `float` type number (e.g. `EXP(10)` or `10*10`).

The `LOG10()` function returns the base-10 logarithm of `number` as a `float`.

> **Note:** The `LOG10()` function is compatible with various SQL database systems such as MySQL, PostgreSQL, SQL Server and Oracle.

## Example

The table below, called `POWER_OF_TEN`, contains powers of `10`:

| num_id | num_10 |
| ------ | ------ |
| 1      | 1      |
| 2      | 10     |
| 3      | 100    |

The `LOG10()` function can calculate the base-10 logarithm of each number in the `POWER_OF_TEN` table:

```sql
SELECT num_id, LOG10(num_10) AS num_log10
FROM POWER_OF_TEN;
```

The above example results in the following output:

| num_id | num_log10 |
| ------ | --------- |
| 1      | 0         |
| 2      | 1         |
| 3      | 2         |
