---
Title: 'CREATE VIEW'
Description: 'Creates a virtual table based on a saved query.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
  - 'Tables'
  - 'Views'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`CREATE VIEW`** command creates a virtual table based on a saved query. The resulting view can be accessed via a [`SELECT`](https://www.codecademy.com/resources/docs/sql/commands/select) statement, just like a normal table in the database.

## Syntax

```pseudo
CREATE VIEW viewname AS
SELECT statements
```

Where `viewname` is a valid SQL name and `SELECT statements` can be any valid `SELECT` query involving any number of tables and may include [`WHERE`](https://www.codecademy.com/resources/docs/sql/commands/where), [`GROUP BY`](https://www.codecademy.com/resources/docs/sql/commands/group-by), [`HAVING`](https://www.codecademy.com/resources/docs/sql/commands/having), or any type of [`JOIN`](https://www.codecademy.com/resources/docs/sql/joins). A view can also reference other views as well as tables.

**Note:** A view will require each column to have a unique name.

## Example

The following example creates a view named `student_count_by_country` based on a `SELECT` statement grouping the `students` table by `birth_country`:

```sql
CREATE VIEW student_count_by_country
AS
SELECT COUNT(student_name) AS student_count,
  birth_country
FROM students
GROUP BY birth_country
```
