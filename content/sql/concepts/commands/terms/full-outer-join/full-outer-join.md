---
Title: 'FULL OUTER JOIN'
Description: 'Combines rows from different tables even if the JOIN condition is not met.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'Join'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

The **`FULL OUTER JOIN`** command combines matching rows with all rows from both the left- and right-side tables.

## Syntax

```pseudo
SELECT column(s)
FROM table_A
FULL OUTER JOIN table_B
  ON table_A.column(s) = table_B.column(s)
WHERE condition;
```

One or more matching `column(s)` can be selected and joined from `table_A` and `table_B` based on matching columns between tables in the `ON` clause to define which rows are combined. Other rows from each table appear in the result separately. The results can be further filtered based on a `condition` in the [`WHERE`](https://www.codecademy.com/resources/docs/sql/commands/where) clause.

## Example

The following example selects all the rows (`*`) from the `books` table with an `author_id` less than 11, and any rows from the `authors` table that have a matching `id` in the filtered `books` table:

```sql
SELECT *
FROM books
FULL OUTER JOIN authors
  ON books.author_id = authors.id
WHERE author_id < 11;
```
