---
Title: '.SUBSTRING()'
Description: 'Extracts a part of a string.' 
Subjects: 
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Database'
  - 'Functions'
  - 'MySQL'
  - 'Strings'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

## Definition

The **`.SUBSTRING()`** function in [SQL](https://www.codecademy.com/resources/docs/sql) takes a slice from a string, the string could be from text and image data and allows you to `SELECT` this substring and manipulate it according to the data type. The data type is the same as the original input except for the next expressions.

## Syntax

```pseudo
SUBSTRING(string, start, length)
```

- `string`: string to extract from.
- `start`: starting index from which the substring will start, minimum possible value is 1.
- `length`: number of characters to extract.
  
> **Note:** Be aware that not all services support this function, Oracle and SQLite use a different one to accomplish the same goal, and the function is written as `SUBSTR`.

## Examples

The below example shows how to use `.SUBSTRING()`:

```sql
SELECT SUBSTRING('Codecademy', 1, 4) AS ExtractString;
```

The code above generates the following output:

The result would be:

| ExtractString |
| ------------- |
|Code           |

