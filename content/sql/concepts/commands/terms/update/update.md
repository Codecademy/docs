---
Title: 'UPDATE'
Description: 'Edits row(s) in a table.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
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

The **`UPDATE`** command edits one or more rows in a table.

## Syntax

```sql
UPDATE table_name
SET some_column = some_value
WHERE some_column = some_value;
```

A `SET` clause is included to indicate that the column to edit as well as a [`WHERE`](https://www.codecademy.com/resources/docs/sql/commands/where) clause for specifying the record(s).

## Example

The given query will update the row for a specific customer ID in the `customers` table:

```sql
UPDATE customers
SET name = 'Code Ninja', city = 'Brooklyn'
WHERE customer_id = 123;
```
