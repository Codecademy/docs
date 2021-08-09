---
Title: "WHERE"
Description: "Filters records (rows) that match a certain condition."
Subjects:
  - "Data Science"
  - "Computer Science"
Tags:
  - "Database"
  - "Queries"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
CatalogContent:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition

Filters records (rows) that match a certain condition.

## Syntax

`WHERE` is a clause that indicates you want to filter the result set to include only rows where the following condition is true.

```sql
SELECT column_name(s)
FROM table_name
WHERE condition;
```

## Example

The given query will select all records where the `pub_year` equals `2017`.

```sql
SELECT title
FROM library
WHERE pub_year = 2017;
```
