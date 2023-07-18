---
Title: 'EXP()'
Description: 'Returns the value of e raised to the power of given number'
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

**`EXP()`** is a mathematical function in SQL that returns the value of **e** raised to the power of a given `number`. Where **e** is the base of natural logarithms, a mathematical constant equal to approximately 2.71828, and `number` is the exponent e is raised to.

## Syntax

```sql
SELECT EXP(number)
FROM table_name;
```

## Example

The following table `exp` contains example data:

| id | num |
|----|-----|
| 1  | 0   |
| 2  | 1   |
| 3  | 2   |

The `EXP()` function is used to return the value of e raised to the power of the `num` column:

```sql
SELECT id, num, EXP(num) as exp_num
FROM exp;
```

Output: 

| id | num | exp_num |
|----|-----|---------|
| 1  | 0   | 1       |
| 2  | 1   | 2.71828 |
| 3  | 2   | 7.38906 |

> **Note:** The `EXP()` function can be used with many popular SQL databases such as SQLite, MySQL, PostgreSQL, and SQL Server.