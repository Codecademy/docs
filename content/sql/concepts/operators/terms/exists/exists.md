---
Title: 'EXISTS'
Description: 'Tests a subquery and returns TRUE if at least one record satisfies it.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Database'
  - 'Queries'
  - 'SQLite'
  - 'MySQL'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

The **`EXISTS`** operator tests a subquery and returns `TRUE` if at least one record satisfies it. Otherwise, `FALSE` is returned.

## Syntax

```pseudo
SELECT column1, column2, ...
FROM table_one
WHERE EXISTS (SELECT column1 FROM table_two WHERE condition);
```

## Example

In the example below, the statement returns `TRUE` for each row in the `users` table that has a corresponding `user_id` value in the `locked_out` table. Otherwise, if there's no match, the statement returns `FALSE`.

```sql
SELECT *
FROM users
WHERE EXISTS (SELECT user_id FROM locked_out WHERE locked_out.user_id = users.user_id);
```
