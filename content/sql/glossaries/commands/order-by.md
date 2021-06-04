---
Title: "ORDER BY"
Subjects:
  - "Data Science"
  - "Computer Science"
Tags:
  - "Database"
  - "Queries"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition

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

The below query will sort the result set by the `birth_date` column in a descending order.

```sql
SELECT *
FROM contacts
ORDER BY birth_date DESC;
```
