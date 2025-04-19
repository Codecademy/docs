---
Title: 'round()'
Description: 'Returns a number rounded to the specified number of decimal places.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The Python **`round()`** function rounds a number to the specified precision in decimal digits. It returns the nearest integer to the given number when called without the precision parameter. When rounding numbers with decimal places exactly halfway between two integers, the `round()` function uses the "round to even" strategy, also known as banker's rounding, which helps reduce bias in statistical calculations.

Rounding in Python is useful for handling floating-point numbers and presenting numerical data in a more readable format. The `round()` function provides a straightforward way to control the precision of decimal values, making it valuable for financial calculations, data visualization, and other applications where exact decimal representation isn't required or where you need to present data in a simplified format.

## Syntax

```pseudo
round(number, ndigits=None)
```

**Parameters:**

- `number`: The number to be rounded.
- `ndigits` (optional): The number of decimal places to round to. Defaults to `None`, which rounds to the nearest integer. If `ndigits` is negative, the number is rounded to the left of the decimal point (e.g., nearest ten, hundred, etc.).

**Return value:**

Returns the rounded number. If `ndigits` is omitted or `None`, returns the nearest integer to the given number.

## Example 1: Rounding to Different Decimal Places

This example demonstrates how to use the `round()` function to round numbers to different decimal places:

```py
# Rounding to the nearest integer
print(round(3.14159))

# Rounding to 2 decimal places
print(round(3.14159, 2))

# Rounding to 4 decimal places
print(round(3.14159, 4))
```

This example results in the following output:

```shell
3
3.14
3.1416
```

The first call to `round()` rounds 3.14159 to the nearest integer, resulting in 3. The second call rounds the same number to 2 decimal places, resulting in 3.14. The third call rounds to 4 decimal places, resulting in 3.1416.

## Example 2: Handling Halfway Values

This example shows how the `round()` function handles numbers that fall exactly halfway between two values:

```py
# Rounding half values
print(round(2.5))
print(round(3.5))
print(round(2.675, 2))
```

This example results in the following output:

```shell
2
4
2.67
```

The output demonstrates the "round to even" behavior of Python's `round()` function. When a number is exactly halfway between two integers (like 2.5 or 3.5), it rounds to the nearest even number. The last example (2.675 rounded to 2 decimal places) may be surprising - it results in 2.67 instead of 2.68 due to the way floating-point numbers are represented in computers.

## Codebyte Example: Working with Negative Values

The following example shows how to use the `round()` function with negative numbers and with negative `ndigits` values:

```codebyte/python
# Rounding negative numbers
print(round(-2.7))  # Rounds to the nearest integer

# Rounding with negative ndigits
print(round(1234, -2))  # Rounds to the nearest hundred
print(round(5678, -3))  # Rounds to the nearest thousand

# Using round() with variables
value = 3.14159265359
precision = 3
rounded_value = round(value, precision)
print(f"{value} rounded to {precision} decimal places is {rounded_value}")
```

## Frequently Asked Questions

### 1. How do I round to 2 decimal places in Python?

To round a number to 2 decimal places in Python, you can use the `round()` function with the second parameter set to 2:

```py
number = 3.14159
rounded = round(number, 2)  # Result: 3.14
```

Alternatively, if you need to ensure the display of trailing zeros, you can use string formatting:

```py
number = 3.1
formatted = f"{number:.2f}"  # Result: "3.10"
```

### 2. How do you round 0.5 in Python?

In Python, rounding 0.5 follows the "round to even" (banker's rounding) rule. This means that:

- 0.5 rounds to 0 (nearest even integer)
- 1.5 rounds to 2 (nearest even integer)
- 2.5 rounds to 2 (nearest even integer)
- 3.5 rounds to 4 (nearest even integer)

This behavior differs from the common "round away from zero" that many people learn in school.

### 3. Does Python round to even?

Yes, Python's `round()` function uses the "round to even" strategy (also known as banker's rounding). When a number is exactly halfway between two integers, it is rounded to the nearest even integer. For example:

- 2.5 rounds to 2
- 3.5 rounds to 4
- 4.5 rounds to 4
- 5.5 rounds to 6

This rounding strategy is designed to minimize bias in statistical calculations by rounding up and down with equal frequency when working with data that contains many midpoint values.
