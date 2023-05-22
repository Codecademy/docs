---
Title: 'POWER()'
Description: 'Calculates the power of a number.'
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

The `POWER()` function in SQL is a mathematical function that calculates the power of a number. It is compatible with various SQL database systems such as MySQL, PostgreSQL, Oracle, and SQL Server.

## Syntax

```sql
SELECT POWER(base, exponent)
FROM table_name;
```

## Example

In this example the following data is given in the table `numbers`:

| base_number | exp_number |
| ----------- | ---------- |
| 3           | 2          |
| 5           | 3          |
| 7           | 0          |

The `POWER()` function can be used to calculate the result:

```sql
SELECT base_number, exp_number, POWER(base_number, exp_number) AS power_number
FROM numbers;
```

The output will be:

| base_number | exp_number | power_number |
| ----------- | ---------- | ------------ |
| 3           | 2          | 9            |
| 5           | 3          | 125          |
| 7           | 0          | 1            |
