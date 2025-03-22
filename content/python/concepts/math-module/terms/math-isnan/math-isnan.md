---
Title: 'math.isnan()'
Description: 'Returns a boolean indicating whether the given value is "Not a Number" (NaN).'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Modules'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`math.isnan()`** function returns `True` if the given value is NaN (not a number) and `False` if the value is a number.

This method belongs to the group of number-theoretic and representation functions in the [math module](https://www.codecademy.com/resources/docs/python/math-module) and is used to handle simple (not complex) numbers. Except when explicitly noted otherwise, this function expects a float-type numeric value.

## Syntax

```pseudo
math.isnan(x)
```

- `x`: The numeric value to be checked.

## Example 1

In the example below, `math.isnan()` returns `False` because the variable `num` is a valid numeric value, not NaN:

```py
import math

num = 20
print(math.isnan(num))
```

The example above results in the following output:

```shell
False
```

## Example 2

In the example below, `math.isnan()` returns `True` because the variable `nan`, created using `float`, represents a "Not a Number" (NaN) value:

```py
import math

nan = float('nan')
print(math.isnan(nan))
```

The example above results in the following output:

```shell
True
```

## Codebyte Example

Run the following code to understand how the `math.isnan()` method works:

```codebyte/python
import math

is_number = 7
print(math.isnan(is_number))

not_a_number = float('nan')
print(math.isnan(not_a_number))
```
