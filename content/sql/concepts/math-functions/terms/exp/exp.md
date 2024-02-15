---
Title: 'EXP()'
Description: 'Returns the value of e raised to the power of given number.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'SQLite'
  - 'SQL Server'
  - 'PostgreSQL'
  - 'MySQL'
  - 'Math'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**`EXP()`** is a mathematical function in SQL that returns the value of _e_ raised to the power of a given number. Where _e_ is a mathematical constant equal to approximately 2.71828, which is the base used in the determination of natural logarithms.

## Syntax

```pseudo
EXP(number)
```

`number` represents a numeric value that _e_ is raised to.

## Example

The following table `exp` contains example data:

| id  | num |
| --- | --- |
| 1   | 0   |
| 2   | 1   |
| 3   | 2   |

The `EXP()` function is used to return the value of _e_ raised to the power of the `num` column:

```sql
SELECT id, num, EXP(num) as exp_num
FROM exp;
```

Output:

| id  | num | exp_num |
| --- | --- | ------- |
| 1   | 0   | 1       |
| 2   | 1   | 2.71828 |
| 3   | 2   | 7.38906 |

> **Note:** The `EXP()` function can be used with many popular SQL databases such as SQLite, MySQL, PostgreSQL, and SQL Server.
