---
Title: 'ORDER BY'
Description: 'Sorts the result set by a particular column either alphabetically or numerically.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`ORDER BY`** command sorts the result set by a particular column either alphabetically or numerically.

## Syntax

```pseudo
SELECT column_name
FROM table_name
ORDER BY column_name ASC | DESC;
```

`ORDER BY` can be set in two ways:

- `DESC` is a keyword used to sort the results in descending order.
- `ASC` is a keyword used to sort the results in ascending order (default).

## Example

The query below will sort by `birth_date`, in descending order:

```sql
SELECT *
FROM contacts
ORDER BY birth_date DESC;
```
