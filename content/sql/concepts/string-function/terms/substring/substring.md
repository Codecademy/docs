---
Title: 'SUBSTRING()'
Description: 'Extracts a part of a string.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Database'
  - 'Functions'
  - 'SQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In SQL, the **`SUBSTRING()`** function takes a slice from a string containing data in binary, character, text, or image format. Upon extraction, the [`SELECT`](https://www.codecademy.com/resources/docs/sql/commands/select) statement can be used to select and manipulate the extracted substring according to the [data type](https://www.codecademy.com/resources/docs/sql/data-types). The data type is the same as the original string except for the next expressions.

## Syntax

```pseudo
SUBSTRING(string, start, length)
```

- `string`: The string to extract a substring from.
- `start`: The `string` index from which the substring starts. The minimum possible value is 1.
- `length`: The number of characters to extract from `string`.

> Note: Not all services support this function. Oracle and SQLite use `SUBSTR()` to accomplish the same goal.

## Example

The below example shows how to use `SUBSTRING()`:

```sql
SELECT SUBSTRING('Codecademy', 1, 4) AS ExtractString;
```

The code above generates the following output:

| ExtractString |
| ------------- |
| Code          |
