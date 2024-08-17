---
Title: 'math.degrees()'
Description: 'Returns the degree equivalent of an input angle given in radians.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Geometry'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.degrees()`** function takes an angle measured in radians and returns its degree equivalent.

## Syntax

```psudeo
math.degrees(x)
```

The `math.degrees()` function accepts a numeric value or expression `x`, representing an angle in radians and returns the equivalent angle in degrees as a floating-point value. If the input is not a number, the function will raise a `TypeError`.

!["45 degree rotations expressed in radian measure" by Adrignola](https://raw.githubusercontent.com/Codecademy/docs/main/media/radian-measure-45-degree-rotations-256.png)
_Some common degree-radian equivalencies._

## Example 1

In the example below, `math.degrees()` returns the degree equivalent of `π`:

```py
import math

pi = math.pi
print(math.degrees(pi))
```

The above code gives the following output:

```shell
180.0
```

## Example 2

In the example below, `math.degrees()` returns the degree equivalent of 1 radian:

```py
import math

print(math.degrees(1.0))
```

The above code gives the following output:

```shell
57.29577951308232
```

## Codebyte Example

Run the following codebyte having the `math.degrees()` function to understand its working:

```codebyte/python
import math

radian_angle = math.pi / 2
print(math.degrees(radian_angle))
```
