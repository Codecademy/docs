Title: 'MOD()'
Description: 'Returns the remainder of one number divided by another.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The SQL math function **`MOD()`** returns the remainder after dividing one number by another. This is commonly used to determine if a number is even or odd, or to cycle through values.

> **Note:** The behavior of `MOD()` may vary slightly between SQL dialects. For example, some databases use `%` as an alternative operator.

## Syntax

```pseudo
MOD(dividend, divisor)
```

**Parameters:**

- `dividend`: The number to be divided.
- `divisor`: The number by which to divide.

**Return value:**

Returns the remainder after dividing `dividend` by `divisor`.

## Example 1

This example uses the `MOD()` function to find the remainder of 10 divided by 3:

```sql
SELECT MOD(10, 3);
```

The output of this code is:

```shell
1
```

## Example 2

Given a table `numbers`:

| id | value |
|----|-------|
| 1  | 7     |
| 2  | 12    |
| 3  | 15    |

Use `MOD()` to check which values are even:

```sql
SELECT id, value, MOD(value, 2) AS remainder FROM numbers;
```

The output will be:

```shell
| id | value | remainder |
|----|-------|-----------|
| 1  | 7     | 1         |
| 2  | 12    | 0         |
| 3  | 15    | 1         |
```

Here, a remainder of `0` indicates an even number.
