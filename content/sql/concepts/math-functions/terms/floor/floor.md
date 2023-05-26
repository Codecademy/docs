---
Title: 'FLOOR()'
Description: 'Rounds down a number to the nearest whole integer.'
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

The SQL math function **`FLOOR()`** returns the largest integer that is less than or equal to a specified numeric value. It effectively rounds down a number to the nearest whole integer.

## Syntax

```sql
SELECT FLOOR(number)
FROM table_name;
```

- `number` - The value which will be floored / rounded down.

## Example

In this example, the following data is given, in a table named `employees`:

| employee_id | salary  |
| ----------- | ------- |
| 1           | 3500.27 |
| 2           | 1530.90 |
| 3           | 3025.10 |
| 4           | 5040.50 |

The `FLOOR()` function can be used to return the largest integer that is less than or equal to a given value:

```sql
SELECT employee_id, FLOOR(salary) AS floored_salary
FROM employees;
```

In this SQL statement, the `salary` values are floored for each employee to get the `floored_salary`. The [`AS`](https://www.codecademy.com/resources/docs/sql/commands/as) keyword is used to name the resulting column `floored_salary` in the output.

The output will be:

| employee_id | floored_salary |
| ----------- | -------------- |
| 1           | 3500           |
| 2           | 1530           |
| 3           | 3025           |
| 4           | 5040           |
