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

The **`LEAD()`** window function takes a column and a positive integer offset as arguments and returns the value of the cell in that column that is the specified number of rows after the current row. A third argument can be added to fill cells that don't have a corresponding row with. The default value for these cells is `NULL`

## Syntax

```pseudo
SELECT LEAD(column_name, offset, [default]) OVER()
```
The default argument is optional and will be `NULL` by default.

## Example

```sql
```