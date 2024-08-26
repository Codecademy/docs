---
Title: '.asin()'
Description: 'Returns the arcsine of a value, giving an angle in radians between `-π/2` and `π/2` for inputs ranging from `-1` to `1`'
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

Returns the **arcsine** of a value, giving an angle in radians between `-π/2` and `π/2` for inputs ranging from `-1` to `1`.

## Syntax

To return the arcsine of an input value `x` ranging from `-1` to `1` the following syntax is used.

```pseudo
math.asin(x)
```

## Example 1

In the following example, the `math.asin()` function is used to return the arcsine of `1`:

```py
import math

print(math.asin(1))
```

The above code gives the following output measured in radians:

```shell
1.5707963267948966
```

## Example 2

In the following code block, the `math.asin()` is used to return the arcsine of `-0.5`:

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