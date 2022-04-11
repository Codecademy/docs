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
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

The `UNION` command allows for the combination of the results of two or more [`SELECT`](https://www.codecademy.com/resources/docs/sql/commands/select) queries. When two queries with the same number of columns are joined together with the `UNION` command, the result is a combination of the returned result from both queries. `UNION` is placed between the two queries being combined.

The combined queries can be any valid `SELECT` statements, including [`WHERE`](https://www.codecademy.com/resources/docs/sql/commands/where), [`GROUP BY`](https://www.codecademy.com/resources/docs/sql/commands/group-by), or [`HAVING`](https://www.codecademy.com/resources/docs/sql/commands/having) clauses. The only restriction is that the number of columns returned for each query is the same, and the corresponding columns of each query have data types that are compatible with the columns in the first query. The result set will use the column names of the first query, ignoring column names from each subsequent query.

`UNION` will eliminate any duplicate rows from the result.

## Syntax

```sql
SELECT column1, column2, column2 ... columnN
FROM table1
UNION
SELECT column1, column2, column2 ... columnN
FROM table2
```

Returns all rows from `table1` and `table2`, dropping any duplicated rows.

The `UNION` command also has a `UNION ALL` option. The difference between `UNION` and `UNION ALL` is that where `UNION` will drop any duplicated rows in the result, `UNION ALL` will append the complete results of one query to another regardless of duplication.

```sql
SELECT column1, column2, column2 ... columnN
FROM table1
UNION ALL
SELECT column1, column2, column2 ... columnN
FROM table2
```

Appends all the rows from `table2` to all the rows from `table1`.

## Example

This example combines the rows from two student tables, `students_term_one` and `students_term_two`, removing any duplicates.

```sql
SELECT first_name, last_name, final_grade
FROM students_term_one
UNION
SELECT first_name, last_name, final_grade
FROM students_term_two
```
