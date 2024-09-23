---
Title: 'CURDATE()'
Description: 'Returns current date (YYYY-MM-DD).'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'MySQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The `CURDATE()` function returns the current date in the format `YYYY-MM-DD` unlike [DATETIME()](https://www.codecademy.com/resources/docs/sql/dates/datetime) which returns date as well as time.

## Syntax

```pseudo
CURDATE()
```

## Example

The below example show how `curdate` functions works:

```sql
SELECT CURDATE();
```

Output of the above code is:

```shell
2024-09-23
```