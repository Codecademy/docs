---
Title: 'SIMILAR TO'
Description: 'Used to compare a string to a regular expression'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`SIMILAR TO`** operator is primarily found in `PostgreSQL`. The `SIMILAR TO` operator returns `TRUE` if its pattern matches the given string otherwise, it returns `FALSE`. It is similar to the `LIKE` operator that is used in other databases like SQL Server, MySQL, and Oracle SQL, and supports pattern matching via the use of [wildcards](https://www.codecademy.com/resources/docs/sql/wildcards).

## Syntax

`SIMILAR TO` is typically used conditionally with a `WHERE` clause to select rows based on a column matching a given string pattern.

```pseudo
SELECT *
FROM table_name
WHERE column_name SIMILAR TO pattern;
```

The `pattern` here constitutes a string that includes the following wildcards:

- `%`: Matches zero or more arbitrary characters.
- `_`: Matches exactly one arbitrary character.

## Example 1

The below example will select every country from the `countries` starting with `M`.

```sql
SELECT *
FROM countries
WHERE country_name SIMILAR TO 'M%';
```

Explanation:

- `M`: The name must start with the letter "M".
- `%`: Matches zero or more characters after "M".

Example Matches:

- Mexico
- Malaysia

## Example 2

The below example selects every `employee` from the `employees` table whose names start with "John" or "Jane".

```sql
SELECT *
FROM employees
WHERE name SIMILAR TO '(John|Jane)%';
```

Explanation:

- `(John|Jane)`: The name must start with either "John" or "Jane".
- `%`: Matches zero or more characters after "John" or "Jane".

Example Matches:

- Johnathan
- John Smith

## Example 3

The below example selects `employees` named "John" or "Jane" followed by a middle initial and a period.

```sql
SELECT *
FROM employees
WHERE name SIMILAR TO '(John|Jane)_[A-Z].%';
```

Explanation:

- `(John|Jane)`: The name must start with either "John" or "Jane".
- `_`: Matches exactly one arbitrary character (in this case, a space or any other single character).
- `[A-Z]`: Matches a single uppercase letter, representing a middle initial.
- `.`: Matches a literal period (used after the middle initial).
- `%`: Matches zero or more characters after the period, such as a last name or other additional characters.

Example Matches:

- John A. Smith
- Jane B. Doe
