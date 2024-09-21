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
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`math.degrees()`** [function](https://www.codecademy.com/resources/docs/python/functions) takes an angle measured in radians and returns its degree equivalent as a floating-point value.

## Syntax

```pseudo
math.degrees(x)
```

- `x`: A numeric value or expression representing an angle in radians. If it is not a number, the function will raise a `TypeError`.

Here is an image that illustrates some common degree-radian equivalencies:

!["45 degree rotations expressed in radian measure" by Adrignola](https://raw.githubusercontent.com/Codecademy/docs/main/media/radian-measure-45-degree-rotations-256.png)

## Example 1

In the example below, the `math.degrees()` function returns the degree equivalent of `π`:

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

In the following example, the `math.degrees()` function returns the degree equivalent of `1` radian:

```py
import math

print(math.degrees(1.0))
```

The above code produces the following output:

```shell
57.29577951308232
```

## Codebyte Example

The following codebyte example demonstrates how the `math.degrees()` function works:

```codebyte/python
import math

radian_angle = math.pi / 2
print(math.degrees(radian_angle))
```
