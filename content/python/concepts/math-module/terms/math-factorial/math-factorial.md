---
Title: 'math.factorial()'
Description: 'Returns factorial of a number.'
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

The `math.factorial()` method returns the factorial of a non-negative number.

## Syntax

```pseudo
math.factorial(n)
```

- `n` is required and needs to be a positive integer.
- The `math.factorial()` function returns a positive `int` value.

If `n` is negative, or not an integer, `math.factorial(n)` returns a ValueError.
If `n` is not a number, `math.factorial(n)` returns a TypeError.

## Example

Use `math.factorial()` to returns the factorial of `6`:

```py
import math

print(math.factorial(6))
```

The above code gives the following output:

```shell
720
```

## Codebyte Example

Run the following example that uses the `math.factorial()` function to understand its working:

```codebyte/python
import math

print(math.factorial(2))
print(math.factorial(6))
print(math.factorial(10))
```
