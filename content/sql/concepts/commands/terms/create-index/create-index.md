---
Title: 'CREATE INDEX'
Description: 'Creates an index on existing columns in a table. Indexes cannot be seen by the user of a database; they just help speed up queries.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Index'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`CREATE INDEX`** command creates an [index](https://www.codecademy.com/resources/docs/sql/indexes) on one or more existing columns from a table. Indexes cannot be seen by the user of a database; they just help speed up queries.

## Syntax

```pseudo
CREATE INDEX index
ON table (column1, column2);
```

> **Note**: Tables with indexes update slower, so indexes should generally be used on columns that will be searched often but not updated frequently.

## Example

This example creates an index called `idx_student_name` on the `student_name` column in the `students` table:

```sql
CREATE INDEX idx_student_name
ON students student_name;
```
