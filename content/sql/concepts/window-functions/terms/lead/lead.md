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

The **`LEAD()`** window function takes a column and a positive integer offset as arguments and returns the value of the cell in that column that is the specified number of rows after the current row. A third argument can be added to fill cells that don't have a corresponding row.

## Syntax

```pseudo
SELECT LEAD(column1_name, offset) OVER(
  ORDER BY column2_name
)
FROM table
```

The `ORDER BY` clause is required. You can also add a third, optional argument that sets the value of cells where the target row doesn't exist.
```pseudo
SELECT LEAD(column1_name, offset, default) OVER(
  ORDER BY column2_name
)
FROM table
```

The third argument will be `NULL` by default.

## Example

```sql
```