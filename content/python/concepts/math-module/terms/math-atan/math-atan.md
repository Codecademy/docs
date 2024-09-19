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

The **`math.atan()`** returns the arctangent of a number. If the tangent of a number x gives you n, then the arctangent of n gives you the number x. The number n can be all real numbers. You can think of n as the slope of the line (opposite over adjacent or y/x) and x to be the radians.

## Syntax

```pseudo
math.atan(n)
```

The `math.atan()` function returns the inverse tangent where the result will coincide whithin -π/2 and π/2 radians (the angle), representing the inverse tangent or arctangent of the value `n`.

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

