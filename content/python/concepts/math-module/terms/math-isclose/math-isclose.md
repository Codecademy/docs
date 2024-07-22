---
Title: '.isclose()'
Description: 'Determines if two floating-point numbers are close to each other within a specified tolerance.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.isclose()`** function returns `True` when two floating-point numbers are close to each other within a specified tolerance. This is useful when comparing a value to an expected value, without requiring exact equality. For example, the comparison `0.1 + 0.2 == 0.3` returns `False`, but using `.isclose()` would return `True`.

## Syntax

```pseudo
math.isclose(x, y, rel_tol=1e-09, abs_tol=0.0)
```

- `a`: the first float value to be compared.
- `b`: the second float value to be compared.
- `rel_tol`: Relative tolerance is the maximum allowed relative difference between `a` and `b`. The default value is `1e-09`, which means the values are considered close if their relative difference is within 9 decimal places. This can be specified using exponential notation, as in the default value, or as a decimal to represent a percentage. For example, a 1% tolerance would be represented as `rel_tol=0.01`. The tolerance value must be zero or positive.
- `abs_tol`: The absolute tolerance is the minimum absolute difference allowed between `a` and `b`. The default value is `0.0`, which means no absolute tolerance is applied. This parameter can be set to any non-negative number. Absolute tolerance is particularly useful for comparisons involving values near zero.

> Note: The required parameters for `.isclose()` are `a` and `b`; all other parameters are optional.

## Example

Here is an example of `.isclose()`:

```py
import math

x = 0.1
y = 0.2

print(math.isclose(x + y, 0.3))
print(math.isclose(x + y, 0.3, rel_tol=0.01))
print(math.isclose(x + y, 0.3, rel_tol=1e-20))
print(math.isclose(x + y, 0.3, abs_tol=0.01))
print(math.isclose(x + y, 0.4, abs_tol=0.01))
```

The above code gives the following output:

```shell
True
True
False
True
False
```

## Codebyte Example

Run the following code to understand how the `.isclose()` function works:

```codebyte/python
import math

print(math.isclose(0.1 + 0.2, 0.3))

print(math.isclose(567.34, 566.25))

print(math.isclose(567.34, 566.25, rel_tol=0.1))

print(math.isclose(0.0000000001, 0.0000000002, abs_tol=0.0000000001))

print(math.isclose(0.0000000001, 0.0000000012, abs_tol=0.0000000001))
```
