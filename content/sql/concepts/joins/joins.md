---
Title: 'Joins'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Joins'
  - 'Documentation'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In order to efficiently store data, we often spread related information across multiple tables.

Connecting or joining these tables to find interesting data is a common task that a Data Analyst, Data Scientist, or Data Engineer will often encounter.

## Inner Join

The `JOIN` clause allows for the return of results from more than one table by joining them together with other results based on common column values specified using an `ON` clause.

`INNER JOIN` is the default `JOIN` and it will only return results matching the condition specified by `ON`.

Here's joining the `books` table and the `authors` table on `books.author_id` column and the `authors.id` column:

```sql
SELECT *
FROM books
JOIN authors
  ON books.author_id = authors.id;
```

![Inner Join GIF](https://content.codecademy.com/courses/learn-sql/multiple-tables/inner-join.gif)

## Outer Join

An outer join will combine rows from different tables even if the join condition is not met.

In a `LEFT JOIN`, every row in the left table is returned in the result set, and if the join condition is not met, then `NULL` values are used to fill in the columns from the right table.

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
  ON table1.column_name = table2.column_name;
```

![Outer Join GIF](https://content.codecademy.com/courses/learn-sql/multiple-tables/left-join.gif)

## UNION

The `UNION` clause is used to combine results that appear from multiple `SELECT` statements and filter duplicates.

```sql
SELECT name
FROM first_names
UNION
SELECT name
FROM last_names;
```

For example, given a `first_names` table with a column name containing rows of data “James” and “Hermione”, and a last_names table with a column name containing rows of data “James”, “Hermione” and “Cassidy”, the result of this query would contain three names:

| name     |
| -------- |
| Cassidy  |
| James    |
| Hermione |

## CROSS JOIN

The `CROSS JOIN` clause is used to combine each row from one table with each row from another in the result set. This `JOIN` is helpful for creating all possible combinations for the records (rows) in two tables.

```sql
SELECT shirts.shirt_color,
   pants.pants_color
FROM shirts
CROSS JOIN pants;
```

The given query will select the `shirt_color` and `pants_color` columns from the result set, which will contain all combinations of combining the rows in the shirts and pants tables.

If there are 3 different shirt colors in the shirts table and 5 different pants colors in the pants table then the result set will contain 3 x 5 = 15 rows.
