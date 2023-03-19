---
Title: 'LEAD()'
Description: 'Allows access to rows after the target value at an offset.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
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

The **`LEAD()`** window function takes a column and a positive integer offset as arguments and returns the contents of the cell in the specified column that is the specified number of rows after the current row.

## Syntax

```pseudo
SELECT LEAD(column_name, offset, [default]) OVER()
```
The default argument is optional and will be NULL by default.

## Example

```sql
```