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

### 1. What type of value is returned by Python `.sqrt()`?

The Python `.sqrt()` function always returns a float, even if the input is an integer.

### 2. What does "sqrt" stand for?

sqrt stands for square root. It calculates the value that, when multiplied by itself, equals the input number.

### 3. Is `sqrt()` a function?

Yes. `sqrt()` is a built-in function provided by Python’s math module. You need to import the module before using it:

```py
import math
print(math.sqrt(16))  # Output: 4.0
```
