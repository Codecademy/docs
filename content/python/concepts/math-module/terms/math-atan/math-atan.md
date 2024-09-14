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

The **`math.atan()`** returns the inverse tangent of a number.

## Syntax

```pseudo
math.atan(n)
```

The `math.atan()` function returns the inverse tangent where the result will coincide whithin -π/2 and π/2 radians (the angle), which represents the inverse tangent or arctangent of the value `n`.

## Example

Use `math.atan()` to return the arctangent of a slope of `1` in radians:

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

