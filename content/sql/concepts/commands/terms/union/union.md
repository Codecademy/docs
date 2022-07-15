---
Title: 'UNION'
Description: 'Combines the results of two or more SELECT queries.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
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

The **`UNION`** command combines the results of two or more [`SELECT`](https://www.codecademy.com/resources/docs/sql/commands/select) queries. When two queries with the same number of columns are joined together with the `UNION` command, the combined results from both queries are returned. `UNION` is placed between the two queries being combined.

The combined queries can be any valid `SELECT` statements, including [`WHERE`](https://www.codecademy.com/resources/docs/sql/commands/where), [`GROUP BY`](https://www.codecademy.com/resources/docs/sql/commands/group-by), or [`HAVING`](https://www.codecademy.com/resources/docs/sql/commands/having) clauses. The only restriction is that the number of columns returned for each query is the same, and the corresponding columns of each query have data types that are compatible with the columns in the first query. The result set will use the column names of the first query, ignoring column names from each subsequent query.

`UNION` will eliminate any duplicate rows from the result.

## Syntax

```pseudo
SELECT column1, column2, column2 ... columnN
FROM table1
UNION
SELECT column1, column2, column2 ... columnN
FROM table2;
```

In the snippet above, all rows from `table1` and `table2` are returned, excluding duplicates.

### UNION ALL

The `UNION` command also has a `UNION ALL` option. The difference between `UNION` and `UNION ALL` is that where `UNION` will drop any duplicated rows in the result, `UNION ALL` will append the complete results of one query to another regardless of duplication.

```pseudo
SELECT column1, column2, column2 ... columnN
FROM table1
UNION ALL
SELECT column1, column2, column2 ... columnN
FROM table2;
```

All the rows from `table2` are appended with all of the rows from `table1`.

## Example

This example combines the rows from two student tables, `students_term_one` and `students_term_two`, removing any duplicates:

```sql
SELECT first_name, last_name, final_grade
FROM students_term_one
UNION
SELECT first_name, last_name, final_grade
FROM students_term_two;
```
