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
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.radians()`** function takes an angle measured in degrees and returns its radian equivalent.

## Syntax

```pseudo
math.radians(x)
```

The `math.radians()` function takes a numeric value or expression `x`, representing an angle measured in degrees, and returns a floating-point value representing the radian equivalent of `x`.

!["45 degree rotations expressed in radian measure" by Adrignola is marked with CC0 1.0. To view the terms, visit https://creativecommons.org/publicdomain/zero/1.0/deed.en?ref=openverse.](https://raw.githubusercontent.com/Codecademy/docs/main/media/radian-measure-45-degree-rotations-256.png)
_Some common degree-radian equivalencies._

## Example 1

In the example below, `math.radians()` returns the radian equivalent of _180_ degrees:

```py
import math

print(math.radians(180))
```

The above code gives the following output:

```shell
3.141592653589793
```

## Example 2

In the example below, `math.radians()` returns the radian equivalent of _57.29577951308232_ degrees:

```py
import math

print(math.radians(57.29577951308232))
```

The above code gives the following output:

```shell
1.0
```

## Codebyte Example

Run the following example using the `math.radians()` function to understand its working:

```codebyte/python
import math

degree_angle = 90
print(math.radians(degree_angle))
```
