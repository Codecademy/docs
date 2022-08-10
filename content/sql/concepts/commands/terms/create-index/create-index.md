---
Title: 'CREATE INDEX'
Description: 'Creates an index on existing column(s) in a table. Indexes can't be seen by the user of a database; they just help speed up queries.'
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

The **`CREATE INDEX`** command creates an [index](https://www.codecademy.com/resources/docs/sql/indexes) on one or more existing columns from a table. Indexes can't be seen by the user of a database; they just help speed up queries.

## Syntax

```pseudo
CREATE INDEX index
ON table (column1, column2);
```

**Note**: Tables with indexes update slower, so indexes should generally be used on columns that will be searched often but not updated frequently.

## Codebyte Example

This example creates an index called `ix_student_name` on the `student_name` column in the `students` table.

```codebyte/sql
CREATE INDEX ix_student_name
ON students student_name;
```
