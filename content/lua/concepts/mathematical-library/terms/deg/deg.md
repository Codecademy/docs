---
Title: ‘.deg()’
Description: ‘Converts angles from radians to degrees.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Trigonometry'
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

Lua's **`math.deg()`** function takes an angle in radians as input and returns the equivalent angle in degrees. This function is helpful when working with angles in a more human-readable and familiar unit, especially for tasks like user interfaces or displaying angles in degrees rather than radians.

> **Note**: It's important to be cautious of rounding errors when converting between degrees and radians due to computer's floating-point representation, especially for small or large angles. Rounding errors occur when converting between degrees and radians due to the inherent limitations of computer representation of numbers.

## Syntax

The `math.deg()` function must be called with an argument using the following syntax:

```pseudo
math.deg(x)
```

- Where `x` is a number representing an angle in radians to be convert to degrees. If no argument is passed, the program will raise an error.

## Example

The following example shows the usage of `math.deg()` by converting an angle of a right triangle from radians to degrees:

```lua
local angleInRadians = math.pi / 4

local angleInDegrees = math.deg(angleInRadians)

print("Angle of the right triangle in degrees: " .. angleInDegrees)
```

The above example results in the following output:

```shell
Angle of the right triangle in degrees: 45.0
```
