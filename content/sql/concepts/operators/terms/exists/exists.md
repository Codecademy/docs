---
Title: EXISTS
Description: 'EXISTS tests a subquery and returns TRUE if there are any records in it.'
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

`EXISTS` tests a subquery and returns `TRUE` if there are any records in it.

## Syntax

```sql
SELECT column1, column2, ...
FROM table_one
WHERE EXISTS (SELECT column1 FROM table_two WHERE condition);
```

## Example

Return all rows from table `users` where `user_id` appears in table `locked_out`

```sql
SELECT *
FROM users
WHERE EXISTS (SELECT user_id FROM locked_out WHERE locked_out.user_id = users.user_id);
```
