---
Title: 'Data Types'
Description: 'Data types provide categories for values we store in tables.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**Data types** provide categories for values we store in tables. Types are assigned to fields through table creation and are responsible for determining some of the attributes and constraints (such as the amount of memory allocated) of data stored within a given table.

SQL supports a range of data types across widely used classes of data, such as the following:

- Numeric types
- String or character types
- Temporal types for dates and times

These data types are found across all flavors of SQL. However, some versions of SQL may support several distinct data types of a particular class while others may only have one (the definitions below are specific to PostgreSQL).

- `integer`: A whole number between -2147483648 and 2147483647. Postgres also includes alternatives `smallint` and `bigint`.
- `real`: A floating-point type that has variable-precision with a maximum range of 6 decimals.
- `text`: A range of characters of unlimited length.
- `char`: A range of characters of fixed length `n`, an error will be raised for any entries that exceed length `n`. Entries that are shorter than `n` will be space-padded.
- `varchar`: A range of characters of variable length with a maximum length `n`. However, unlike `char` there is no space-padding to extend entries shorter than `n`.
- `date`: A date (without any time value), such as 2022-06-21 (ISO 8601 format) and 6/21/2022.
