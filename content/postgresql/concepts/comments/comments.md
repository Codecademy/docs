---
Title: 'Comments'
Description: 'Comments in PostgreSQL are explanatory lines that are ignored by the compiler. They are used to describe the functionality of SQL statements, or to temporarily disable a piece of SQL code. Adding comments to your SQL scripts is considered a best practice, as it makes your code easier to understand and maintain.'
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

**Comments** are text placed inside code that is not executed. They are intended as documentation or explanation of the code they are a part of.

## Syntax

In PostgreSQL, you can use either single-line or multi-line comments.

- Single-line comments start with `--` and end at the end of the line.

```sql
-- This is a single-line comment
```

- Multi-line comments start with `/*` and end with `*/`.

```sql
/*
This is a
multi-line comment
*/
```

## Example

Here's an example of how you can use comments in PostgreSQL:

```sql
-- This is a single-line comment
SELECT *
FROM employees; -- This comment is at the end of the line

/*
This is a multi-line comment
that spans multiple lines
*/
SELECT *
FROM departments;
```

In the above example, comments are used to describe what the following SQL statement does. The PostgreSQL compiler will ignore these comments when executing the SQL code.
