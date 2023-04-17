---
Title: 'COUNT()'
Description: 'Returns the number of rows that match the specified criteria.'
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

The `COUNT()` aggregate function returns the total number of rows that match the specified criteria.

## Syntax

```sql
SELECT COUNT(column_name)
FROM table_name;
```

`COUNT()` takes the name of a column as an argument and counts the number of rows where the column is not `NULL`. The non `NULL` values are counted in the column that is passed in using the `column_name`.

When `*` or `1` are passed as an argument into `COUNT()`, the number of all rows, including `NULL` values, are included in the count.

## Example

Suppose there's an `employees` table with the following values:

| name    | salary | experience |
| ------- | ------ | ---------- |
| Michael | 80000  | 14         |
| Pam     | 41500  | 2          |
| Jim     | 45000  | 4          |
| Dwight  | 55000  | NULL       |

To find the total number of rows in the `employees` table that have experience, the given query can be used:

```sql
SELECT COUNT(experience)
FROM employees;
```

The result would be:

| COUNT(experience) |
| ----------------- |
| 3                 |

`COUNT(*)` counts the number of rows including `NULL` values. `COUNT(1)` replaces all values not excluding `NULL` with 1, so it includes them in the count. Therefore, `COUNT(*)` and `COUNT(1)` have the same results.

To find the total number of rows in the `employees` table, the given query can be used:

```sql
SELECT COUNT(*)
FROM employees;

SELECT COUNT(1)
FROM employees;
```

Both queries above would result in a count of 4.
