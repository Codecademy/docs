---
Title: 'Data Types'
Description: 'Data types provide categories for values we store in tables'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Documentation'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**Data types** provide categories for values we store in tables. Types are assigned to fields through table creation and are responsible for determining some of the attributes and constraints (such as the amount of memory allocated) of data stored within a given table.

SQL supports a range of data types across widely used classes of data, such as the following:

- Numeric types
- String or character types
- Temporal types for times and dates

These data types are found across all flavors of SQl; however, some versions of SQL may support several distinct data types within a class while others may only have one (the definitions below are specific to PostgreSQL).

- `integer`: A whole number between -2147483648 and 2147483647. Postgres also includes alternatives `smallint` and `bigint`.
- `real`: A floating-point type that has variable-precision with a maximum range of 6 decimals.
- `text`: A range of characters of unlimited length.
- `date`: A date (without any time value), examples include 2022-06-21 (ISO 8601 format) and 6/21/2022.
