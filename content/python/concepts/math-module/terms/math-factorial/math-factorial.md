---
Title: 'math.factorial()'
Description: 'Returns factorial of a number.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.factorial()`** method returns the factorial of a positive number.

## Syntax

```pseudo
math.factorial(n)
```

- `n`: A positive number whose factorial is calculated.

> **Note:** If `n` is negative or non-integer, `math.factorial(n)` raises a `ValueError`. If `n` is not a number, it raises a `TypeError`.

## Example

In the example we are using `math.factorial()` to return the factorial of `6`:

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
