---
Title: 'SELECT TOP'
Description: 'Returns a specified number of rows from the top of the result.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'SQL Server'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`SELECT TOP`** command returns a specified number of rows from the top of the result.

## Syntax

This command is used to select the inital rows from a table, limiting the result to a specified number, represented here by `n`:

```sql
SELECT TOP (n) column_name(s)
FROM table_name;
```

Where `column_name(s)` is a comma delimited list of columns from the table `table_name`.

The command can also be used with `PERCENT` to limit the result to the top `n` percent of rows:

```pseudo
SELECT TOP (n) PERCENT column_name(s)
FROM table_name;
```

## Examples

The following query selects all columns from the top 5 rows of the `books` table:

```sql
SELECT TOP (5) *
FROM books;
```

The next query selects the top 25% of rows from the `movies` table, under just the `movie_titles` column:

```sql
SELECT TOP (25) PERCENT movie_titles
FROM movies;
```
