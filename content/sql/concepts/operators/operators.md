---
Title: 'Operators'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Arithmetic'
  - 'Logical'
  - 'Comparison'
  - 'SQLite'
  - 'MySQL'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

SQL operators are unique keywords used in the `WHERE` clause of a statement to perform arithmetic, comparison, and logical operations.

## Arithmetic Operators

Arithmetic operators are used to perform arithmetic on numeric types:

- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division
- `%`: Modulo (remainder)

For example:

```sql
-- Addition
10 + 5
-- Subtraction
10 - 5
--  Multiplication
10 * 5
-- Division
10 / 5
-- Modulo
10 % 5
```

## Comparison Operators

Comparison operators can be used to compare two values:

- `=`: Equal to
- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal to
- `<=`: Less than or equal to
- `!=`: Not equal

For example:

```sql
SELECT *
FROM students
WHERE gpa > 25;
```

## Logical Operators

Logical operators can be used to combine multiple conditions such as `AND`, `OR`, `NOT` or perform operations such as `NOT` and `BETWEEN`.
