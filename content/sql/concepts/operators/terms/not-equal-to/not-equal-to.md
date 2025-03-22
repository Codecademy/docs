---
Title: 'NOT EQUAL TO'
Description: 'Compares two values and returns true if they are not equal.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Operators'
  - 'Database'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/data-science'
---

In SQL, the **`NOT EQUAL TO`** operator is used to compare two values. It returns true if the values are not equal and false if they are equal. The operator can be represented in two ways: `<>` or `!=`.

## Syntax

```pseudo
-- Using the <> operator
SELECT column1, column2, ...
FROM table_name
WHERE column_name <> value;

-- Using the != operator
SELECT column1, column2, ...
FROM table_name
WHERE column_name != value;
```

## Example

The given query will select all employees who are not in the `Sales` department using the `NOT EQUAL TO` operator.

```sql
SELECT *
FROM employees
WHERE department <> 'Sales';
```
