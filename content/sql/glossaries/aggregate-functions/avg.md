---
Title: "AVG()"
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

The `AVG()` aggregate function returns the average value in a column.

## Syntax

```sql
SELECT AVG(column_name)
FROM table_name;
```

The column in the argument has to be a numeric column.

## Example

For instance, suppose there's an `employees` table with the following values:

| name | salary | experience | 
| -- | -- | -- |
| Michael | 80000 | 14 |
| Pam | 41500 | 2 |
| Jim | 45000 | 4 |
| Dwight | 55000 | 8 |

To find the average `salary` for the employees who have less than 5 years of experience, the given query can be used:

```sql
SELECT AVG(salary)
FROM employees
WHERE experience < 5;
```

The result would be:

| AVG(salary) | 
| -- |
| 43250 |
