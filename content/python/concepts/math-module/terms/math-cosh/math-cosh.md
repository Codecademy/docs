---
Title: 'math.cosh()'
Description: 'Returns the hyperbolic cosine of a number.'
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

The **`math.cosh()`** method returns the hyperbolic cosine of a number. This method is equivalent to _(exp(number) + exp(-number)) / 2_.

## Syntax

```pseudo
math.cosh(x)
```

Input `x` is a numeric value to find the hyperbolic cosine of. If the value is not a number, it returns a `TypeError: must be real number`.

## Example 1

Use `math.cosh()` to return the hyperbolic cosine of integer `1`:

```py
import math

print(math.cosh(1))
```

The above code gives the following output:

```shell
1.5430806348152437
```

## Example 2

Use `math.cosh()` to return the hyperbolic cosine of the float `8.9`:

```py
import math

print(math.cosh(8.9))
```

The above code gives the following output:

```shell
3665.986837772461
```

## Codebyte Example

Run the following example that uses the `math.cosh()` function to understand its working:

```codebyte/python
import math

print("The hyperbolic cosine of 0 is: ", math.cosh(0))
```
