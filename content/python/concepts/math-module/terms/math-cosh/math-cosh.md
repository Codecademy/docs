---
Title: 'math.cosh()'
Description: 'Returns the hyperbolic cosine of a number.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`math.cosh()`** method returns the hyperbolic cosine of a number which is equivalent to `(math.exp(x) + math.exp(-x)) / 2`.

## Syntax

```pseudo
math.cosh(x)
```

- `x`: A numeric value whose hyperbolic cosine is to be calculated.

## Example 1

The following example uses `math.cosh()` to return the hyperbolic cosine of integer _1_:

```py
import math

print(math.cosh(1))
```

The above code gives the following output:

```shell
1.5430806348152437
```

> **Note:** If the input is not a number, a `TypeError` is raised.

## Example 2

The following example uses `math.cosh()` to return the hyperbolic cosine of the float _8.9_:

```py
import math

print(math.cosh(8.9))
```

The above code gives the following output:

```shell
3665.986837772461
```

## Codebyte Example

Run the following example to understand the working of `math.cosh()` method:

```codebyte/python
import math

print("The hyperbolic cosine of 0 is: ", math.cosh(0))
```
