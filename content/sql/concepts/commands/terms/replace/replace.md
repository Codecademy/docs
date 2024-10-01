---
Title: 'REPLACE()'
Description: 'Replace all matching string parts with a specified new substring.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`REPLACE()`** function replaces all matching parts of a string with a specified new substring.

## Syntax

```pseudo
REPLACE("string_expression", "old_substring", "new_substring");
```

The `REPLACE()` function searches for all occurrences of the `old_substring` in the `string_expression` and replaces it with `new_substring`.

> **Note:** All parameters are required.

## Example

In this example, "cool" is replaced with "amazing":

```sql
SELECT REPLACE("SQL is cool", "cool", "amazing");
```

The above query will give the following output:

```shell
SQL is amazing
```
