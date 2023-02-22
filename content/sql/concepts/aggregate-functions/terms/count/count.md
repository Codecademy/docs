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

`COUNT()` is a function that takes the name of a column as an argument and counts the number of rows where the column is not `NULL`.

**Note:** There are different variations to count records.  `COUNT(*)` counts number of rows including `NULL` values. `COUNT(1)` counts non `NULL` values. `COUNT(*)` and `COUNT(1)` have the same results because `COUNT(1)` replaces all records with the value `1` and counts the number of value `1`. The `COUNT(column_name)` counts non `NULL` values in that column.

## Example

Suppose there's an `employees` table with the following values:

| name    | salary | experience |
| ------- | ------ | ---------- |
| Michael | 80000  | 14         |
| Pam     | 41500  | 2          |
| Jim     | 45000  | 4          |
| Dwight  | 55000  | NULL       |

To find the total number of rows in the `employees` table, the given query can be used:

```sql
SELECT COUNT(*)
FROM employees;
```

The result would be:

| COUNT(\*) |
| --------- |
| 4         |


```sql
SELECT COUNT(1)
FROM employees;
```

The result would be:

| COUNT(1)  |
| --------- |
| 4         |


To find the total number of rows in the `employees` table that has experience, the given query can be used:

```sql
SELECT COUNT("experience")
FROM employees;
```

The result would be:

| COUNT("experience") |
| --------- |
| 3         |


To find the total number of employees who have less than 5 years of experience, the given query can be used:

```sql
SELECT COUNT(*)
FROM employees
WHERE experience < 5;
```

The result would be:

| COUNT(\*) |
| --------- |
| 2         |

**Note:** NULL value is excluded due to the `WHERE experience < 5` command. 
