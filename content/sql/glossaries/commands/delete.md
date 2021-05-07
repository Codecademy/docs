---
Title: "DELETE"
Subjects:
  - "Data Science"
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

Removes exisiting record(s) from a table. If a `WHERE` statement is excluded, all records in the table will be deleted.

## Example

Suppose there's a `students` table and we want to delete all the non-current students:

```sql
DELETE FROM students
WHERE enrolled_status = 'not_current';
```

Suppoose we want to delete all entries in the `students` table:

```sql
DELETE FROM students;
```
