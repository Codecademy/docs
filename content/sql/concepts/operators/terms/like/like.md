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

`LIKE` is commonly used in a [`WHERE` clause](https://www.codecademy.com/resources/docs/sql/commands/where) to select rows based on a column matching a given string pattern.

```pseudo
SELECT *
FROM table
WHERE column LIKE pattern;
```

The `pattern` is made up of a string that includes the following wildcards:

* The percent character `%` matches zero to any number of arbitrary characters.
* The underscore character `_` matches a single arbitrary character.

## Examples

Select all rows where `column`'s value has "H" as the second character:

```sql
SELECT * FROM table WHERE column LIKE '_H%';
```

The matches would include values like "THE" and "WHERE" but not "HOUSE", or "BREATH".

The next example selects all rows where an "H" is anywhere in the value of `column`:

```sql
SELECT * FROM table WHERE column LIKE '%H%';
```

Matches values like "THE", "WHERE", "HOUSE" and "BREATH".

This example selects all rows where `column`'s value is three characters long and has an "H" as the second character:

```sql
SELECT * FROM table WHERE column LIKE '_H_';
```

Matches values like "THE" but not "WHERE", "HOUSE" or "BREATH".
