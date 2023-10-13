---
Title: 'sin()'
Description: 'Returns the sine of an angle in radians.'
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

The **`sin()`** function in Lua's math library calculates the sine of a given angle in radians. The result is the ratio of the length the side opposite the given angle to the length of the hypotenuse in a right-angled triangle.

## Syntax

```pseudo
math.sin(angle)
```

- `angle`: The angle in radians.

## Example

In this example, `math.sin()` calculates the sine of a 90 degree angle (π/2 radians).

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