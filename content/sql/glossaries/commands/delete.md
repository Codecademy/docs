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

```sql
DELETE FROM students
WHERE enrolled_status = 'not_current';
/* Deletes all non-current students */

DELETE FROM students;
/* Deletes all entries in the Students table */
```
