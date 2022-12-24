---
Title: 'Operators'
Description: 'Operators are unique keywords used to perform arithmetic, comparison, and logical operations.'
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

**Operators** are unique keywords used to perform arithmetic, comparison, and logical operations. They are commonly used in the [`WHERE`](https://www.codecademy.com/resources/docs/sql/commands/where) clause of an expression.

## Arithmetic Operators

Arithmetic operators are used to perform arithmetic on numeric types:

- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division
- `%`: [Modulo](https://www.codecademy.com/resources/docs/general/modulo) (remainder)

### Example

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
- `<>`: Not equal to

### Example

```sql
SELECT *
FROM students
WHERE gpa > 25;
```

## Logical Operators

Logical operators can be used to combine multiple conditions such as [`AND`](https://www.codecademy.com/resources/docs/sql/operators/and), [`OR`](https://www.codecademy.com/resources/docs/sql/operators/or), [`NOT`](https://www.codecademy.com/resources/docs/sql/operators/not) or perform operations such as `NOT` and [`BETWEEN`](https://www.codecademy.com/resources/docs/sql/operators/between).
