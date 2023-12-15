---
Title: 'rad()'
Description: 'Converts a number given in degrees to radians.'
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

The **`rad()`** function in Lua's math library converts a number given in degrees to its equivalent in radians.

## Syntax

```pseudo
math.rad(degree)
```

- `degree`: The number in degrees.

## Example

In this example, `math.rad()` converts 180 degrees to radians.

```lua
local x = 180
local answer = math.rad(x)

local output = string.format("%.0f in radians is %.4f", x, answer)
print(output)
```

This will result in the following output below.

```shell
180 in radians is 3.1416
```
