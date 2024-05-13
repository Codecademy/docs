---
Title: 'Comments'
Description: 'Comments in PostgreSQL are explanatory lines ignored by the compiler, enhancing code clarity and maintenance.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Comments'
  - 'Database'
  - 'PostgreSQL'
CatalogContent:
  - 'getting-started-off-platform-for-data-science'
  - 'paths/design-databases-with-postgresql'
  - 'paths/computer-science'
---

In PostgreSQL, **comments** are annotations added to SQL code to provide information about the code without affecting its execution. They are primarily used for documentation purposes and enhancing code readability. Comments in PostgreSQL can be single-line or multi-line and are initiated with `--` for single-line comments and `/* */` for multi-line comments.

## Syntax

- Single-line comment:

```sql
-- This is a single-line comment
```

- Multi-line comment:

```sql
/*
This is a
multi-line comment
*/
```

## Example

Here's an example of how comments are used in PostgreSQL:

```sql
-- Selects employee IDs and their names from the employees table.
SELECT id, name
FROM employees;

/*
  Selects all columns from the departments table.
  This query retrieves detailed information about departments.
*/
SELECT *
FROM departments;
```

> **Note:** In the above example, comments are used to describe what the following SQL statement does. The PostgreSQL compiler will ignore these comments when executing the SQL code.
