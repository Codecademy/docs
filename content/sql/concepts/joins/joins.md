---
Title: 'Joins'
Description: 'The JOIN clause allows for the return of results from more than one table by joining them together with other results based on common column values specified using an ON clause.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Join'
  - 'Documentation'
  - 'Queries'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`JOIN`** clause combines rows from two or more tables by joining them together with other results based on common column values specified using an `ON` condition.

In order to efficiently store data, we often spread related information across multiple tables. Connecting or joining these tables to find interesting data is a common task that a data analyst, data scientist, or data engineer will often encounter.

## INNER JOIN

[`INNER JOIN`](https://www.codecademy.com/resources/docs/sql/commands/inner-join) is the default `JOIN` and it will only return results matching the condition specified by `ON`.

The following only returns rows from the `books` and `authors` tables on the condition that `books.author_id` and `authors.id` columns match:

```sql
SELECT *
FROM books
INNER JOIN authors
  ON books.author_id = authors.id;
```

## OUTER JOIN

An `OUTER JOIN` will combine rows from different tables even if the join condition is not met. These commands include the following:

- [`LEFT JOIN`](https://www.codecademy.com/resources/docs/sql/commands/left-join), which combines matches with all rows from the left-side table.
- [`RIGHT JOIN`](https://www.codecademy.com/resources/docs/sql/commands/right-join), which combines matches with all rows from the right-side table.
- [`FULL OUTER JOIN`](https://www.codecademy.com/resources/docs/sql/commands/full-outer-join), which combines matches with all rows from the left- and right-side tables.

## UNION

The [`UNION`](https://www.codecademy.com/resources/docs/sql/commands/union) clause is used to combine results that appear from multiple [`SELECT`](https://www.codecademy.com/resources/docs/sql/commands/select) statements and filter duplicates.

```sql
SELECT name
FROM first_names
UNION
SELECT name
FROM last_names;
```

For example, given a `first_names` table with a column name containing rows of data “James” and “Hermione”, and a `last_names` table with a column name containing rows of data “James”, “Hermione” and “Cassidy”, the result of this query would contain three names:

| name     |
| -------- |
| Cassidy  |
| James    |
| Hermione |
