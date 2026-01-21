---
Title: 'CURRENT_TIMESTAMP()'
Description: 'Get the current date and time.'
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

The **`CURRENT_TIMESTAMP()`** function returns the current date and time in the string format `YYYY-MM-DD HH:MM:SS`.

## Syntax

```pseudo
CURRENT_TIMESTAMP([precision])
```

The optional `precision` parameter specifies the desired number digits after the decimal.

> Note:
>
> > - This function works the same as `NOW([precision])`.
> > - This syntax is specific to MySQL. A variant for Oracle SQL and SQL Server exists under `CURRENT_TIMESTAMP` without the bracket pair `()`.

## Example 1 - String Format

```sql
SELECT CURRENT_TIMESTAMP();
```

```shell
2026-01-21 19:39:23
```

## Example 2 - Numeric Format

If `CURRENT_TIMESTAMP()` is used in a numerical context, i.e. in an arithmetic calculation, then it will return a numeric value in the format `YYYYMMDDHHMMSS`.

```sql
-- Return with 2 decimal digits
SELECT CURRENT_TIMESTAMP() + 67;
```

```shell
20260121203123.56
```

## Example 3 - Precision

The optional parameter `precision` accepts an `INT` value between 0 and 6. If `precision` is between 1 and 6, then the value returned will have a fractional portion where `precision` is the number of digits after the decimal point.

If `CURRENT_TIMESTAMP()` is used alone, then the string format returned will be in the form `YYYY-MM-DD HH:MM:SS.dddddd`.

```sql
-- Ask for 3 decimal digits
SELECT CURRENT_TIMESTAMP(3);
```

```shell
2026-01-21 20:38:29.584
```

If `CURRENT_TIMESTAMP()` is used in a numerical calculation, then the value returned will be in the format `YYYYMMDDHHMMSS.dddddd`.

```sql
-- Ask for 3 decimal digits and add a value to the function
SELECT CURRENT_TIMESTAMP(3) + 67;
```

```shell
20260121203896.586
```

If `precision` is 0, then the decimal portion is omitted.

```sql
-- Ask for no decimal digits
SELECT CURRENT_TIMESTAMP(0);
SELECT CURRENT_TIMESTAMP(0) + 67;
```

```shell
2026-01-21 20:39:37
20260121204004
```

## Codebyte Example

Run the lines below to see the function in action.

```codebyte/sql
SELECT CURRENT_TIMESTAMP();
SELECT CURRENT_TIMESTAMP(6);
SELECT CURRENT_TIMESTAMP(6) + 67;
```
