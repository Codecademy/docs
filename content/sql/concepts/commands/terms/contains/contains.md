---
Title: 'CONTAINS'
Description: 'Searches for matches to words or phrases.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In SQL, CONTAINS is a predicate used to search for matches to words or phrases in a column. Unlike LIKE, CONTAINS performs full-text searches only on indexed columns, resulting in faster performance.

## Syntax

`CONTAINS()` takes two arguments. A column, and the word or phrase to search for.

```sql
SELECT *
FROM table_name
WHERE CONTAINS(column_name, 'word');
```

## Example

```sql
SELECT *
FROM contacts
WHERE CONTAINS(first_name, 'Paul');
```

In this example, we will search the `first_name` column for any matches to the name `Paul`. This query will return any rows from the `contacts` table in which the `first_name` column contains the string `Paul`.
