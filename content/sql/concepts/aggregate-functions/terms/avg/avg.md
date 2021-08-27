---
Title: 'AVG()'
Description: 'Returns the average value in a column.'
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

The `AVG()` aggregate function returns the average value in a column.

## Syntax

```sql
SELECT AVG(column_name)
FROM table_name;
```

The column in the argument has to be a numeric column.

## Example 1

For instance, suppose there's an `employees` table with the following values:

| name    | salary | experience |
| ------- | ------ | ---------- |
| Michael | 80000  | 14         |
| Pam     | 41500  | 2          |
| Jim     | 45000  | 4          |
| Dwight  | 55000  | 8          |

To find the average `salary` for all the employees, the given query can be used:

```sql
SELECT AVG(salary)
FROM employees;
```

Since (80000 + 41500 + 45000 + 55000) ÷ 4 = 55375, the result would be:

| AVG(salary) |
| ----------- |
| 55375       |

## Example 2

To find the average `salary` for the employees who have less than 5 years of experience, the given query can be used:

```sql
SELECT AVG(salary)
FROM employees
WHERE experience < 5;
```

Since (41500 + 45000) ÷ 2 = 43250, the result would be:

| AVG(salary) |
| ----------- |
| 43250       |
