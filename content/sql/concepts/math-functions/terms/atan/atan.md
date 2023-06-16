---
Title: 'ATAN()'
Description: 'Returns the arctangent of a provided number.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
  - 'Computer Science'
Tags:
  - 'SQL'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
  - 'Functions'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`ATAN()`** function in SQL is a mathematical function utilized to compute the arctangent of a provided number. The function takes an angle, measured in radians, and returns the arctangent, also known as the inverse of the tangent. This function is used in numerous mathematical and analytical calculations, such as determining angles or performing trigonometric operations within SQL queries.

> **Note:** `ATAN()` is widely supported across various SQL database systems, including MySQL, PostgreSQL, Oracle, and Microsoft SQL Server. Review the documentation of the specific database system for implementation details.

## Syntax

```pseudo
ATAN(expression)
```

- If the input expression is a numeric value, the `ATAN()` function returns the arctangent of that value in radians.
- If the input expression is `NULL`, the `ATAN()` function also returns `NULL`.

## Example

This example calculates the arctangent of a specific value:

```sql
SELECT ATAN(1.5) AS Arctangent_Result;
```

This will result in the following output:

| arctangent_result |
| ----------------- |
| 0.982793723247329 |
