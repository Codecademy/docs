---
Title: 'math.degrees()'
Description: 'Returns the degree equivalent of an input angle given in radians.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
  - 'Geometry'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **math.degrees()** function takes in an angle measured in radians and returns its degree equivalent.

## Syntax

```shell
math.degrees(x)
```

`math.degrees()` takes in a numeric value or expression `x`, which represents an angle measured in radians, and returns a floating point value representing the degree equivalent to `x`.

!["45 degree rotations expressed in radian measure" by Adrignola is marked with CC0 1.0. To view the terms, visit https://creativecommons.org/publicdomain/zero/1.0/deed.en?ref=openverse.](https://raw.githubusercontent.com/Codecademy/docs/main/media/radian-measure-45-degree-rotations-256.png)
_Some common degree-radian equivalencies._

## Example

Use `math.degrees()` to return the degree equivalent to `π`:

```py
import math

pi = math.pi
print(math.degrees(pi))
```

The above code gives the following output:

```shell
180.0
```

<br>

Use `math.degrees()` to return the degree equivalent to 1 radian:

```py
import math

print(math.degrees(1.0))
```

The above code gives the following output:

```shell
57.29577951308232
```

## Codebyte Example

Run the following example using the `math.degrees()` function to understand its working:

```codebyte/python
import math

radian_angle = math.pi / 2
print(math.degrees(radian_angle))
```
