---
Title: 'CREATE VIEW'
Description: 'Creates a persistent virtual table based on a saved query.'
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
---

The **`CREATE VIEW`** command creates a persistent virtual table based on a saved query. The resulting view can be accessed via a [`SELECT`](https://www.codecademy.com/resources/docs/sql/commands/select) statement, just like a normal table in the database.

## Syntax

The `CREATE VIEW` statement is used as follows:

```pseudo
CREATE VIEW viewname AS
SELECT statements
```

Where `viewname` is a valid SQL name and `SELECT statements` can be any valid `SELECT` query involving any number of tables and may include [`WHERE`](https://www.codecademy.com/resources/docs/sql/commands/where), [`GROUP BY`](https://www.codecademy.com/resources/docs/sql/commands/group-by), `HAVING`(https://www.codecademy.com/resources/docs/sql/commands/having) or any type of join.

## Example

