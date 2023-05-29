---
Title: 'ABS()'
Description: 'Returns the absolute value of a given number.'
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

The **`ABS()`** function in SQL returns the absolute value of a given number. That means, it effectively converts negative numbers to positive numbers, and leaves positive numbers unchanged.

## Syntax

```sql
SELECT ABS(number)
FROM table_name;
```

## Example

In this example, the following data is given in the `transactions` table:

| temperature_id | temperature |
| -------------- | ----------- |
| 1              | -5.7        |
| 2              | -18.5       |
| 3              | 30.2        |

The `ABS()` function is used to calculate the absolute temperature value:

```sql
SELECT temperature_id, ABS(temperature) AS absolute_temp
FROM transactions;
```

The output will be:

| temperature_id | absolute_temp |
| -------------- | ------------- |
| 1              | 5.7           |
| 2              | 18.5          |
| 3              | 30.2          |

> **Note:** `ABS()` is compatible with various SQL database systems such as MySQL, PostgreSQL, Oracle, and SQL Server.
