---
Title: LIKE
Description: 'Returns `TRUE` if its first text argument matches the wildcard pattern in its second argument.'
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

The `LIKE` operator returns `TRUE` if its first text argument matches the [wildcard](https://www.codecademy.com/resources/docs/sql/wildcards) pattern in its second argument.

## Syntax

`LIKE` is typically used in a `WHERE` clause to select rows based on a column matching a given pattern.

```sql
SELECT *
FROM table
WHERE column LIKE pattern;
```

`pattern` is made up of a string including the special characters `%`, which matches 0 to any number of arbitrary characters, and `_` which matches a single arbitrary character.

## Examples

Select all rows where `column`'s value has "H" as the second character:

```sql
SELECT * FROM table WHERE column LIKE '_H%';
```

Matches "THE" and "WHERE" but not "HOUSE" or "BREATH".

Select all rows where `column`'s value contanes an "H" anywhere:

```sql
SELECT * FROM table WHERE column LIKE '%H%';
```
Matches "THE", "WHERE", "HOUSE" and "BREATH".

Select all rows where `column`'s value is three characters long and has an "H" as the second character:

```sql
SELECT * FROM table WHERE column LIKE '_H_';
```

Matches "THE" but not "WHERE", "HOUSE" or "BREATH".
