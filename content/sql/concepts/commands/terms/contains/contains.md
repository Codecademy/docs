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

CONTAINS() is a predicate used to search for matches to words or phrases in a column.

## Code Example

`CONTAINS()` takes two arguements. A column, and the word/phrase to search for.

```sql
SELECT column_name
FROM table_name
WHERE CONTAINS(column_name, 'word');
```

```sql
SELECT names
FROM contacts
WHERE CONTAINS(names, 'Paul');
```

In this example, we will search the `names` column for any matches to the name `Paul`.
