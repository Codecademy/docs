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

## Example

Suppose there's an `employees` table with the following values:

| name    | salary | experience |
| ------- | ------ | ---------- |
| Michael | 80000  | 14         |
| Pam     | 41500  | 2          |
| Jim     | 45000  | 4          |
| Dwight  | 55000  | NULL       |

* 'COUNT()'
`COUNT()` is a function that takes the name of a column as an argument and counts the number of rows where the column is not `NULL`.

The `COUNT(column_name)` counts non `NULL` values in that column.

To find the total number of rows in the `employees` table that has experience, the given query can be used:

```sql
SELECT COUNT("experience")
FROM employees;
```

The result would be:

| COUNT("experience") |
| --------- |
| 3         |


* COUNT(\*) and COUNT(1)
When * or 1 are used as an argument of 'COUNT()', that counts the number of all rows including `NULL`.

`COUNT(*)` counts number of rows including `NULL` values. `COUNT(1)` replaces all values including `NULL` with 1, so it counts all records including `NULL` values. Therefore, `COUNT(*)` and `COUNT(1)` have the same results.

To find the total number of rows in the `employees` table, the given query can be used:

```sql
SELECT COUNT(*)
FROM employees;
```

or

```sql
SELECT COUNT(1)
FROM employees;
```

The result would be:

| COUNT(\*) |
| --------- |
| 4         |
