---
Title: 'math.radians()'
Description: 'Returns the radian equivalent of an input angle given in degrees.'
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

In Python, the **`math.radians()`** [function](https://www.codecademy.com/resources/docs/python/functions) takes an angle measured in degrees and returns its radian equivalent as a floating-point value.

## Syntax

```pseudo
math.radians(x)
```

- `x`: A numeric value or expression representing an angle measured in degrees.

Here is an image illustrating some common degree-radian equivalencies:

!["45 degree rotations expressed in radian measure" by Adrignola](https://raw.githubusercontent.com/Codecademy/docs/main/media/radian-measure-45-degree-rotations-256.png)

## Example 1

In the example below, the `math.radians()` function returns the radian equivalent of `180` degrees:

```py
import math

print(math.radians(180))
```

The above code gives the following output:

```shell
3.141592653589793
```

## Example 2

In the following example, the `math.radians()` function returns the radian equivalent of `57.29577951308232` degrees:

```py
import math

print(math.radians(57.29577951308232))
```

The above code produces the following output:

```shell
1.0
```

## Codebyte Example

The below codebyte example demonstrates how the `math.radians()` function works:

```codebyte/python
import math

degree_angle = 90
print(math.radians(degree_angle))
```
