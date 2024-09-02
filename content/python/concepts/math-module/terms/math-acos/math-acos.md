---
Title: 'math.acos()'
Description: 'Returns the arc cosine of a number.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Math'
  - 'Trigonometry'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`math.acos()`** function returns the arc cosine (inverse cosine) of a number, expressed in radians.

## Syntax

```pseudo
math.acos(x)
```

- `x`: A number between `-1` and `1` representing the cosine value for which the arc cosine is to be calculated.

The `math.acos()` function returns a numeric value between `0` and `π`, which represents the inverse cosine of the value `x`.

## Example

The example below demonstrates how to use the `math.acos()` function to calculate the arc cosine of `0`:

```py
import math

print(math.acos(0))
```

The above example code gives the following output:

```shell
1.5707963267948966
```

## Codebyte Example

Run the following example that uses the `math.acos()` function to understand its working:

```codebyte/python
import math

print("The inverse cosine of 1 is: ", math.acos(1))
```
