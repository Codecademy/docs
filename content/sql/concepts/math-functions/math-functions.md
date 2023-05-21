---
Title: 'Math Functions'
Description: 'SQL Math Functions are built-in features in SQL, which allow mathematical operations directly in database queries.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'SQLite'
  - 'MySQL'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**SQL Math Functions** are built-in features in SQL, which allow mathematical operations and complex calculations, directly in database queries. This makes it easier and more efficient to work with numerical data in SQL, as there's no need to extract the data and process it separately.

### Example

In this example, the following data is given, in a table named `employees`:

| employee_id | salary  |
| ----------- | ------- |
| 1           | 3500.27 |
| 2           | 1530.90 |
| 3           | 3025.10 |
| 4           | 5040.50 |

The `FLOOR()` math function can be used to calculate the largest integer that is less than or equal to a given value:

```sql
SELECT employee_id, FLOOR(salary) AS floored_salary
FROM employees;
```

In this SQL statement, the `salary` values are floored for each employee to calculate the `floored_salary`. The [`AS`](https://www.codecademy.com/resources/docs/sql/commands/as) keyword is used to rename the `FLOOR(salary)` column to `floored_salary` in the output.

The output will be:

| employee_id | floored_salary |
| ----------- | -------------- |
| 1           | 3500           |
| 2           | 1530           |
| 3           | 3025           |
| 4           | 5040           |

This is a practical example of math functions in SQL.
