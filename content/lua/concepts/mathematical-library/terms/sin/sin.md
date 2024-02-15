---
Title: 'sin()'
Description: 'Returns the sine of an angle given in radians.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`sin()`** function in Lua's math library calculates the sine of an angle given in radians. The result is the ratio of two sides of a right-angled triangle: the length of the side opposite the given angle to the length of the hypotenuse.

## Syntax

```pseudo
math.sin(angle)
```

- `angle`: The angle in radians.

## Example

In this example, `math.sin()` calculates the sine of a 90 degree angle (_π/2_ radians).

```lua
local angle = math.pi / 2
local answer = math.sin(angle)

local output = string.format("The sine of %.4f is approximately %.0f", angle, answer)
print(output)
```

This is the resulting output:

```shell
The sine of 1.5708 is approximately 1
```
