---
Title: 'SQRT()'
Description: 'Returns the square root of a given number.'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
  - 'SQL Server'
CatalogContent: 
  - 'learn-sql'
  - 'path/analyze-data-with-sql'
---

**SQRT()** is a function in SQL that returns the square root of a number input. The square root of any given number is a number that multiplied by itself will result in the number. 

## Syntax

```pseudo
SQRT(number);
```

## Example

For example, the square root of 144 is 12, as 12 multiplied by 12 equals 144. It is important to note, SQRT() requires a positive number, and will always return a positive number.

```sql
SELECT SQRT(144);
```
Yields:

```sql
12
```

> **Note:** SQRT() is compatible with different SQL database platforms such as MySQL, PostgreSQL, Oracle, and SQL Server.