---
Title: "COUNT()"
Subjects:
  - "Data Science"
  - "Computer Science"
Tags:
  - "SQLite"
  - "PostgreSQL"
  - "MySQL"
  - "Functions"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
---

## Definition 

The `COUNT()` aggregate function returns the total number of rows that match the specified criteria.

## Syntax

```sql
SELECT COUNT(column_name)
FROM table_name;
```

`COUNT()` is a function that takes the name of a column as an argument and counts the number of rows where the column is not `NULL`.

**Note:** A column name of the table can also be used instead of `*`. Unlike `COUNT(*)`, this variation `COUNT(column_name)` will not count `NULL` values in that column.

## Example

Suppose there's an `employees` table with the following values:

| name | salary | experience | 
| -- | -- | -- |
| Michael | 80000 | 14 |
| Pam | 41500 | 2 |
| Jim | 45000 | 4 |
| Dwight | 55000 | 8 |

To find the total number of employees who have less than 5 years of experience, the given query can be used:

```sql
SELECT COUNT(*)
FROM employees
WHERE experience < 5;
```

The result would be:

| COUNT(*) | 
| -- |
| 2 |
