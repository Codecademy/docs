---
Title: Wildcards
Description: 'Wildcards are special characters that are used in SQL to represent one or more arbitrary characters.'
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

Wildcards are special characters that are used in SQL to represent one or more arbitrary characters. They allow flexibility in matching string values using the LIKE operator.

There are two wildcards generally recognized across SQL implementations:

- `%` which matches any arbitrary number of characters.
- `_` which matches any one single character.

Some SQL implementations add additional types of wildcards. (Microsoft Access SQL, in particular, is non-standard, using `*` in place of `%` and `?` in place of `_`.)

Wildcards are typically used with the [`LIKE`](https://www.codecademy.com/resources/docs/sql/operators/like) operator, which returns true if the first string argument matches the wildcard pattern in the second.

## Examples

Select all rows where `column`'s value has "H" as the second character.

```sql
SELECT * FROM table WHERE column LIKE '_H%';
```

Matches "THE" and "WHERE" but not "HOUSE" or "BREATH".

Select all rows where `column`'s value contanes an "H" anywhere.

```sql
SELECT * FROM table WHERE column LIKE '%H%';
```
Matches "THE", "WHERE", "HOUSE" and "BREATH".

Select all rows where `column`'s value is three characters long and has an "H" as the second character:

```sql
SELECT * FROM table WHERE column LIKE '_H_';
```

Matches "THE" but not "WHERE", "HOUSE" or "BREATH".
