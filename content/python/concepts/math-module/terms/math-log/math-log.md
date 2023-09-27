---
Title: 'math.log()'
Description: 'Returns the natural logarithm of a number or the logarithm of a number to the given base.'
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

The **`math.log()`** function returns the natural logarithm of a number or the logarithm of a number to the given base.

## Syntax

```pseudo
math.log(n, base)
```

The `math.log()` function takes the following parameters:

- `n` is a required number or numeric expression to calculate the logarithm.
- `base` is an optional number to specify the logarithm base. The default value for the base is `e`.

The `math.log()` function returns a `float` value, the natural logarithm of `n` or the logarithm of `n` to `base`. If `n` is `0` or a negative number, it returns a `ValueError`.

## Example

Use `math.log()` to return the natural log of `12` (base _e_):

```py
import math

print(math.log(12))

# Output: 2.4849066497880004
```

## Codebyte Example

The following example is runnable and uses the `math.log()` function to return the natural and base `10` logarithms of a number:

```codebyte/python
import math

print("The natural logarithm of 10 is: ", math.log(10))
print("The 10-base logarithm of 10 is: ", math.log(10, 10))
```
