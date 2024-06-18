---
Title: 'Type Casts'
Description: 'Type Casts converts a value from one data type to another specified data type.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Database'
  - 'PostgreSQL'
CatalogContent:
  - 'getting-started-off-platform-for-data-science'
  - 'paths/design-databases-with-postgresql'
---

In PostgreSQL, **Type Casts** converts a value from one data type to another specified data type. This can be done explicitly using the `CAST()` function and the `::` operator.

## Syntax

`CAST()` function:

```pseudo
CAST(value AS target_data_type)
```

`::` operator:

```pseudo
value::target_data_type
```

## Examples

### Example 1

Casting a floating-point number to an integer using the `CAST()` function:

```sql
SELECT CAST(37.8 AS INTEGER);
```

Output:

| int4 |
| ---- |
| 38   |

### Example 2

Casting a string to a date using the `CAST()` function:

```sql
SELECT CAST('Wed 22 May 2024 18:33:55' AS DATE);
```

Output:

| date       |
| ---------- |
| 2024-05-22 |

### Example 3

Casting a string to a floating-point number using the `::` operator:

```sql
SELECT '22.5'::FLOAT;
```

Output:

| float8 |
| ------ |
| 22.5   |
