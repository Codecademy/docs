---
Title: 'math.floor()'
Description: 'Returns the largest integer less than or equal to the input'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.floor()`** function takes in a numeric data type and rounds the value down to the nearest integer. This function is part of Python's built-in [`math` module](https://www.codecademy.com/resources/docs/python/math-module), which provides access to mathematical functions defined by the C standard.

The `math.floor()` function is widely used in programming for tasks that require rounding down, such as calculating how many complete units can fit within a given space, implementing pagination logic, or performing integer division. Unlike regular rounding which considers the decimal value, `math.floor()` always rounds down.

## Syntax

```pseudo
math.floor(x)
```

**Parameters:**

- `x`: A numeric value (required)

**Return value:**

- Returns an integer value representing the largest integer less than or equal to `x`

## Example 1: Basic Usage

This example demonstrates the basic usage of the `math.floor()` function with positive numbers:

```py
import math

# Floor values of positive numbers
print(math.floor(5.8))
print(math.floor(2.1))
print(math.floor(10.0))
```

This example results in the following output:

```shell
5
2
10
```

The function rounds each number down to the nearest integer, so 5.8 becomes 5, 2.1 becomes 2, and 10.0 remains 10.

## Example 2: Working with Negative Numbers

This example shows how `math.floor()` behaves with negative numbers:

```py
import math

# Floor values of negative numbers
print(math.floor(-3.2))
print(math.floor(-7.9))
print(math.floor(-10.0))
```

This example results in the following output:

```shell
-4
-8
-10
```

For negative numbers, `math.floor()` rounds down to the next smaller integer, so -3.2 becomes -4, -7.9 becomes -8, and -10.0 remains -10.

## Codebyte Example: Comparing Floor with Other Rounding Methods

This example compares `math.floor()` with other number conversion methods in Python, including:

- `int()` conversion (which truncates by removing the decimal part)
- [`math.ceil()`](https://www.codecademy.com/resources/docs/python/math-module/math-ceil) (rounds up to the nearest integer)
- [`round()`](https://www.codecademy.com/resources/docs/python/built-in-functions/round) (rounds to the nearest integer, with ties rounding to the nearest even number)

```codebyte/python
import math

# Sample numbers to demonstrate different behaviors
numbers = [3.7, 2.5, 2.0, -1.8, -2.5]

print("Number   | floor() | int()  | ceil() | round()")
print("---------|---------|--------|--------|--------")

for num in numbers:
  floor_result = math.floor(num)
  int_result = int(num)
  ceil_result = math.ceil(num)
  round_result = round(num)

  print(f"{num:7} | {floor_result:7} | {int_result:6} | {ceil_result:6} | {round_result:6}")

# Special case explanation
print("\nSpecial case with negative numbers:")
num = -2.3
print(f"For {num}:")
print(f"math.floor({num}) = {math.floor(num)} - rounds down to the next smaller integer")
print(f"int({num}) = {int(num)} - truncates by removing the decimal part")
```

## Frequently Asked Questions

### 1. What is `.floor()` used for?

The `.floor()` function is used to round a number down to the nearest integer. It's particularly useful in scenarios where you need to calculate the maximum number of complete units that can fit in a given space, when implementing pagination systems, or for performing specific mathematical operations that require rounding down.

### 2. What is the result of `floor(2.4)` and `ceil(2.9)`?

The floor of 2.4 equals 2 because `math.floor()` rounds down to the nearest integer. The ceil of 2.9 equals 3 because `math.ceil()` rounds up to the nearest integer. These functions work in opposite ways - floor rounds down, while ceil rounds up.

### 3. What is the difference between `.floor()` and `.ceil()`?

The main difference between `.floor()` and `.ceil()` is their rounding direction:

- `math.floor(x)` rounds down to the largest integer less than or equal to x
- `math.ceil(x)` rounds up to the smallest integer greater than or equal to x

For example, `math.floor(3.7)` returns 3, while `math.ceil(3.7)` returns 4. With negative numbers, `math.floor(-2.3)` returns -3, while `math.ceil(-2.3)` returns -2.
