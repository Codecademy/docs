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

The **`math.cosh()`** method returns the hyperbolic cosine of a number.

## Syntax

```pseudo
math.cosh(x)
```

- `x`: A numeric value whose hyperbolic cosine is calculated.

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

> **Note:** If the value is not a number it returns `TypeError: must be real number`

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

> **Note:** `math.cosh(x)` is equivalent to `(math.exp(x) + math.exp(-x))/2`

## Codebyte Example

Run the following example that uses the `math.cosh()` function to understand its working:

```codebyte/python
import math

print("The hyperbolic cosine of 0 is: ", math.cosh(0))
```
