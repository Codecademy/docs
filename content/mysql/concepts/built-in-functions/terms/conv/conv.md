---
Title: 'CONV()'
Description: 'Converts a number from one base to another and returns the result as a string representing the converted value.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'MySQL'
  - 'SQL'
  - 'Numbers'
  - 'Output'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`CONV()`** function in MySQL is used to convert a number from one base to another and returns the result as a string representing the converted value.

It allows you to perform base conversions between numeric systems like _binary_, _octal_, _decimal_, and _hexadecimal_.

## Syntax

```pseudo
CONV(number, from_base, to_base)
```

- `number`: The number to be converted.
- `from_base`: The base of the number to be converted.
- `to_base`: The base to which the number should be converted.

> **Note**: The `from_base` and `to_base` parameters define the numeric bases for the conversion and must be between _2_ and _36_. The function operates on _positive integers_ and returns the result as a string.

## Example

Assume we have a `numbers` table with a `binary_value` column containing numbers in binary format:

`numbers` Table

| binary_value |
| ------------ |
| 1010         |
| 1101         |
| 1111         |

The following example demonstrates how to convert the binary values in the `binary_value` column to their decimal equivalents:

```sql
SELECT binary_value, CONV(binary_value, 2, 10) AS decimal_value
FROM numbers;
```

In this example, the `CONV()` function converts the `binary_value` from base 2 (binary) to base 10 (decimal). The output will be as follows:

| binary_value | decimal_value |
| ------------ | ------------- |
| 1010         | 10            |
| 1101         | 13            |
| 1111         | 15            |

If you want to convert a hexadecimal value to decimal, assume the `hex_value` column in the `numbers` table:

| hex_value |
| --------- |
| A         |
| D         |
| F         |

You can convert the hexadecimal values to decimal with the following query:

```sql
SELECT hex_value, CONV(hex_value, 16, 10) AS decimal_value
FROM numbers;
```

The output will be as follows:

| hex_value | decimal_value |
| --------- | ------------- |
| A         | 10            |
| D         | 13            |
| F         | 15            |
