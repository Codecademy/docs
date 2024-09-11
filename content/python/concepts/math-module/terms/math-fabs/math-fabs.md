---
Title: 'math.fabs()'
Description: 'Computes the absolute value of a number and returns it as a floating-point value.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Integers'
  - 'Math'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.fabs()`** function takes a numeric value and returns its absolute value as a float. Unlike [math.abs()](https://www.codecademy.com/resources/docs/numpy/math-methods/abs), which can return the absolute value in the same type as the input, `math.fabs()` always converts the result to a float. Passing any non-numeric data type will raise a `TypeError`.

## Syntax

```pseudo
math.fabs(n)
```

- `n`: A numeric value for which the absolute value is to be computed.

## Example

Below is an example of `math.fabs()` to return the floating-point absolute of the given value:

```py
import math

print(math.fabs(-154.2))
```

The above code prints the following output:

```shell
154.2
```

## Codebyte Example

Run the following code to understand how the `math.fabs()` function works:

```codebyte/python
import math

print(math.fabs(-7.8))

print(math.fabs(10))

print(math.fabs(2405))

print(math.fabs(57.5))
```
