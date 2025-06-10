---
Title: 'ROUND()'
Description: 'Rounds a value to the nearest integer or to a specific number of decimals.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Numbers'
  - 'Values'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In SQL, the **`ROUND()`** function rounds a value to the nearest integer or to a specific number of decimals. It's a powerful function that helps ensure consistency and accuracy in the output data.

## Syntax

```pseudo
ROUND(value, decimal_places)
```

**Parameters:**

- `value`: The value to be rounded.
- `decimal_places` (Optional): The total number of decimal places to round to. If omitted, the default is `0` (round to the nearest whole number).

## Example 1: Basic Rounding Using `ROUND()`

This example utilizes the `ROUND()` function to round a floating-point number to two decimal places:

```sql
SELECT ROUND(123.4567, 2) AS RoundedValue;
```

Here is the output:

```shell
RoundedValue
-------------
123.46
```

## Example 2: Rounding to Whole Numbers Using `ROUND()`

This example utilizes the `ROUND()` function without specifying decimal places to round a floating-point number to the nearest whole number:

```sql
SELECT ROUND(98.7) AS RoundedValue;
```

Here is the output:

```shell
RoundedValue
-------------
99
```

## Example 3: Rounding to Negative Decimal Places Using `ROUND()`

This example utilizes the `ROUND()` function to round a floating-point number to the left of the decimal point:

```sql
SELECT ROUND(12345.67, -2) AS RoundedValue;
```

Here is the output:

```shell
RoundedValue
-------------
12300
```

## Frequently Asked Questions

### 1. Does `ROUND()` always round up?

No. `ROUND()` follows the standard rounding rule: it rounds up if the next digit is 5 or more and down otherwise.

### 2. Is `ROUND()` supported in all SQL databases?

Yes, `ROUND()` is supported in all SQL databases. However, the syntax and behavior may differ slightly.

### 3. What’s the difference between `ROUND()` and `TRUNC()`?

`ROUND()` adjusts values based on rounding rules, while `TRUNC()` simply cuts off digits without rounding.
