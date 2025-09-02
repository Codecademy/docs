---
Title: 'math.sqrt()'
Description: 'Calculates the square root of a given number.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Python'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The Python **`.sqrt()`** [function](https://www.codecademy.com/resources/docs/python/functions) is used to calculate the square root of a given number and is a part of the `math` library. If the number is negative, the function raises a [`ValueError`](https://www.codecademy.com/resources/docs/python/errors).

## Python `.sqrt()` Syntax

```pseudo
import math

math.sqrt(num)
```

**Parameters:**

- `num`: The number whose square root is to be calculated.

**Return value:**

Returns a floating-point number representing the square root of `num`.

## Example 1: Using Python `.sqrt()` with an Integer

This example uses Python `.sqrt()` to calculate the square root of an integer:

```py
import math

print(math.sqrt(4))
```

Here is the output:

```shell
2.0
```

## Example 2: Using Python `.sqrt()` with a Float

This example uses Python `.sqrt()` to calculate the square root of a float:

```py
import math

print(math.sqrt(6.25))
```

Here is the output:

```shell
2.5
```

## Codebyte Example: Handling Multiple Values Using Python `.sqrt()`

This codebyte example uses Python `.sqrt()` to calculate the square roots of multiple values:

```codebyte/python
import math

numbers = [4, 9, 16, 25]

results = [math.sqrt(num) for num in numbers]

print(results)
```

## Frequently Asked Questions

### 1. What is the function of Python `.sqrt()`?

The Python `.sqrt()` function calculates the square root of a given number. It is commonly used for mathematical calculations involving powers and
roots.

### 2. What type of value is returned by Python `.sqrt()`?

The Python `.sqrt()` function always returns a float, even if the input is an integer.

### 3. What is the difference between Python `.sqrt()` and NumPy `.sqrt()`?

The Python `.sqrt()` function works only with single scalar values (integers or floats), whereas NumPy `.sqrt()` can operate on arrays, lists, or single values.
