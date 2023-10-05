---
Title: '.ceil()'
Description: 'Returns the smallest integer greater than or equal to x.'
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

The **`.ceil()`** function in Lua's Math library rounds up a given number to the smallest integer that is greater than or equal to th given number. The given number can be a positive or negative number.

## Syntax

```lua
math.ceil(x)
```

- `x`: A number that is round up to the smallest integer.

## Example

```lua
local num1 = 14.4
local num2 = -22.5

local ceilNum1 = math.ceil(num1)
local ceilNum2 = math.ceil(num2)

print(ceilNum1)
print(ceilNum2)
```

```shell
15
-23
```

In the example above, `math.ceil()` is used to round `num1` (14.4) up to the smallest integer, resulting in `15`. Similarly, `math.ceil()` is used to round `num2` (-22.5) up to the smallest integer, resulting in `-23`.