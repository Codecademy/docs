---
Title: 'Wildcards'
Description: 'Wildcards are special characters used in SQL to represent one or more arbitrary characters.'
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

Wildcards are special characters used in SQL to represent one or more arbitrary characters.

There are two wildcards generally recognized across SQL implementations:

- `%` which matches zero to any arbitrary number of characters.
- `_` which matches any one single arbitrary character.

Some SQL implementations add additional types of wildcards. Microsoft Access SQL, in particular, is non-standard, using `*` in place of `%` and `?` in place of `_`.

Wildcards are commonly used with the [`LIKE` operator](https://www.codecademy.com/resources/docs/sql/operators/like), which returns `TRUE` if the wildcard pattern matches with the provided string value.

## Examples

The following example selects all rows where "H" is the second character in the value of `column`:

```sql
SELECT * FROM table WHERE column LIKE '_H%';
```

The matches would include values like "THE" and "WHERE" but not "HOUSE", or "BREATH".

Select all rows where `column`'s value contains an "H" anywhere:

```sql
SELECT * FROM table WHERE column LIKE '%H%';
```

Matches values like "THE", "WHERE", "HOUSE" and "BREATH".

Select all rows where `column`'s value is three characters long and has an "H" as the second character:

```sql
SELECT * FROM table WHERE column LIKE '_H_';
```

Matches the value "THE" but not "WHERE", "HOUSE" or "BREATH".

Select all rows where `column`'s value begins with "H";

```sql
SELECT * FROM table WHERE column LIKE 'H%';
```

Matches the value "HOUSE" but not "THE", "WHERE" or "BREATH".

Select all rows where `column`'s value ends with "H":

```sql
SELECT * FROM table WHERE column LIKE '%H';
```

Matches the value "BREATH" but not "THE", "WHERE" or "HOUSE".
