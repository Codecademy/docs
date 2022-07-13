---
Title: 'DELETE'
Description: 'Removes existing row(s) from a table. If a WHERE statement is excluded, all rows in the table will be deleted.'
Subjects:
  - 'Data Science'
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
  - 'paths/design-databases-with-postgresql'
---

The **`DELETE`** command removes one or more existing rows from a table.

## Syntax

```pseudo
DELETE FROM table WHERE condition;
```

**Note**: If the [`WHERE`](https://www.codecademy.com/resources/docs/sql/commands/where) clause is excluded, all rows in the `table` will be deleted.

## Examples

The first example assumes there is a `students` table and all the rows where the student has a `not_current` status are deleted:

```sql
DELETE FROM students
WHERE enrolled_status = 'not_current';
```

The next example is more destructive. The entire `students` table will be deleted due to there being no `WHERE` clause:

```sql
DELETE FROM students;
```
