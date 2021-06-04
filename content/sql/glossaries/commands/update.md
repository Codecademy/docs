---
Title: "UPDATE"
Subjects:
  - "Data Science"
  - "Computer Science"
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

Edits row(s) in a table.

## Syntax

The `UPDATE` statement is used to edit records (rows) in a table. It includes a `SET` clause that indicates the column to edit and a `WHERE` clause for specifying the record(s).

```sql
UPDATE table_name
SET some_column = some_value
WHERE some_column = some_value;
```

## Example

The given query will update the row for a specific customer ID in the `customers` table:

```sql
UPDATE customers
SET name = 'Sonny Li', city = 'Brooklyn'
WHERE customer_id = 420;
```
