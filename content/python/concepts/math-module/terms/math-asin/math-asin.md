---
Title: 'math-asin()'
Description: 'Returns the arcsine or angle measured in radians between -pi/2 and pi/2 of input values ranging between -1 and 1.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Math'
  - 'Modules'
  - 'Trigonometry'
  - 'Functions'
  - 'Arguments'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Returns the **arcsine** or angle measured in radians of input values ranging between -1 and 1.

## Syntax

```py
math.asin(x)
```

## Example 1

Use `math.asin()` to return arcsine of `1`:

```py
import math

print(math.asin(1))
```

The above code gives the following output measured in radians:

```shell
1.5707963267948966
```

## Example 2

Use `math.asin()` to return arcsine of `-0.5`:

```py
import math

print(math.asin(-0.5))
```

The above code gives the following output measured in radians:

```shell
-0.5235987755982989
```

## Codebyte Example

Run the following example that uses the `math.asin()` inverse function to understand its working:

```codebyte/python
import math

print (math.asin(0))
print (math.asin(-1))
print (math.asin(0.5))
print (math.asin(0.8660254037844386))
print (math.asin(math.sqrt(3)/2))
```