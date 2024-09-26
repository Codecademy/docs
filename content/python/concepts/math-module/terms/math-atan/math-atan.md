---
Title: 'math.atan()'
Description: 'Returns the inverse tangent of a number.'
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

The **`math.atan()`** function returns the arctangent of a given number, which is the angle in radians whose tangent equals that number. It can accept any real number, representing the slope of a line.

## Syntax

```pseudo
math.atan(x)
```

- `n`: The number for which the arctangent is to be calculated. This can be any real number.

The `math.atan()` function returns the inverse tangent of the value `x`, which is the angle in radians. The result lies within the range of _-π/2_ to _π/2_ radians.

## Example

The example below demonstrates the use of the `math.atan()` function:

```py
import math

print(math.atan(1))
```

The above code gives the following output:

```shell
0.7853981633974483
```

## Codebyte Example

Run the following example that uses the `math.atan()` function to understand its working:

```codebyte/python
import math

print("The arc tangent of sqrt(3) is ", math.atan(math.sqrt(3)))
```
