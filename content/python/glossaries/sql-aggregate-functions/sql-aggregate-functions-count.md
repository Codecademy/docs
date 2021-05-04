---
Title: "COUNT()"
Subjects:
  - "data science"
  - "computer science"
Tags:
  - "sqlite"
  - "postgresql"
  - "mysql"
  - "function"
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

For instance, suppose there's an `employees` table with the following values:

| salary | experience | 
| -- | -- |
| 42000 | 3 |
| 82000 | 7 |
| 62000 | 10 |
| 65000 | 4 |

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