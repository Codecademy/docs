---
Title: 'DELETE'
Description: 'Removes existing record(s) from a table. If a WHERE statement is excluded, all records in the table will be deleted.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

Removes existing record(s) from a table. If a `WHERE` statement is excluded, all records in the table will be deleted.

## Example

Suppose there's a `students` table and we want to delete all the non-current students:

```sql
DELETE FROM students
WHERE enrolled_status = 'not_current';
```

Suppose we want to delete all entries in the `students` table:

```sql
DELETE FROM students;
```
