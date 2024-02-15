---
Title: 'BETWEEN'
Description: 'Selects values, inclusively of beginning and end values, within a given range. BETWEEN works with numbers, text, or date data types.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`BETWEEN`** operator selects values, inclusive of beginning and end values, within a given range.

## Syntax

```pseudo
SELECT *
FROM table
WHERE column BETWEEN value_A AND value_B;
```

The `column` must exist and `value_A` and `value_B` must define a valid range. `BETWEEN` works with numbers, text, or date data types.

## Example

The following query returns all rows from the `students` table with a `gpa` between 0 and 2 (exclusive) in ascending order:

```sql
SELECT *
FROM students
WHERE gpa BETWEEN 0.0 AND 1.99
ORDER BY gpa;
```
