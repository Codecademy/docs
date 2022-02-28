---
Title: Wildcards
Description: 'Wildcards are special characters that are used in certian situations in SQL to represent more than one character, or more than one column.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Database'
  - 'Queries'
  - 'SQLite'
  - 'MySQL'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

Wildcards are special characters that are used in certian situations in SQL to represent more than one character, or more than one column. They allow flexibility in matching string values or selecting columns.

## The `*` character

The `*` character is used in a `SELECT` statement to represent all the columns of a table. In a `SELECT` statement including multiple tables, it can be qualified with the table name or alias to specify all columns from that particular table. Unqualified, it represents all columns from all tables in the `FROM` clause.

## `*` Syntax 1

Select all columns from `table`:

```sql
SELECT * FROM table
```

## `*` Syntax 2

Select all columns from `table1` and `table2`:

```sql
SELECT * FROM table1 INNER JOIN table2 ON table1.columnA = table2.columnB
```

Note: When selecting all columns from more than one table, if there are columns with the same names in more than one table this will generate an error.

## `*` Syntax 3

Select all columns from `table1` only:

```sql
SELECT table1.* FROM table1 INNER JOIN table2 ON table1.columnA = table2.columnB
```


