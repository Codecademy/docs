---
Title: 'Type Casts'
Description: 'PostgreSQL Type Casts can be used to convert a value to another datatype.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Database'
  - 'PostgreSQL'
CatalogContent:
  - 'paths/analyze-data-with-sql'
---

In PostgreSQL, **Type Casts** can be used to convert a value from one datatype to another. This can be done with either the `CAST()` function or the cast operator (`::`).

## Syntax

- CAST() function

```sql
CAST(value AS type)
```

- Cast operator

```sql
value::type
```

## Example

To cast a floating-point number to an integer using the CAST() function:

```sql
SELECT CAST(37.8 AS INTEGER);
```

Output:

```
 int4
------
   38
(1 row)
```

To cast a string to a date using the CAST() function:

```sql
SELECT CAST('Wed 22 May 2024 18:33:55' AS DATE);
```

Output:

```
    date
------------
 2024-05-22
(1 row)
```

To cast a string to a floating-point number using the Cast operator:

```sql
SELECT '22.5'::FLOAT;
```

Output:

```
 float8
--------
   22.5
(1 row)
```
