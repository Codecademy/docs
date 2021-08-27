---
Title: "ORDER BY"
Description: "Sorts the result set by a particular column either alphabetically or numerically."
Subjects:
  - "Data Science"
  - "Computer Science"
Tags:
  - "Database"
  - "Queries"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
CatalogContent:
  - "learn-sql"
  - "paths/analyze-data-with-sql"
---

Sorts the result set by a particular column either alphabetically or numerically.

## Syntax

`ORDER BY` can be ordered in two ways:

- `DESC` is a keyword used to sort the results in descending order.
- `ASC` is a keyword used to sort the results in ascending order (default).

```sql
SELECT column_name
FROM table_name
ORDER BY column_name ASC | DESC;
```

## Example

The below query will sort the result set by the `birth_date` column in descending order.

```sql
SELECT *
FROM contacts
ORDER BY birth_date DESC;
```
