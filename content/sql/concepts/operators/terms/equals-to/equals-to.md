---
Title: 'EQUAL TO'
Description: 'Queries for items that are equal to a specified condition.'
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

The **`EQUAL TO (=)`** operator is used to select rows in a table where a value is equal to some condition(s), usually placed in the `WHERE` clause.

## Syntax

```pseudo
SELECT column1, column2, ...
FROM table_name
WHERE column = condition;
```

The equal to operator `=` can be combined with other comparison operators to check for the following:

- `>=`: Greater than or equal to
- `<=`: Less than or equal to
- `!=`: Not equal

## Example 1

Return values that are equal to `Hello` in the table `Greetings`:

```sql
SELECT *
FROM Greetings
WHERE greeting = 'Hello';
```

## Example 2

Return rows with a count equal to `3` in the table `pets`:

```sql
SELECT *
FROM pets
WHERE count = 3;
```

## Example 3

Return rows where cups are not equal to `0` in the table `coffee`:

```sql
SELECT *
FROM coffee
WHERE count != 0;
```
