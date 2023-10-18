---
Title: 'ceil()'
Description: 'Returns the smallest integer greater than or equal to a given value.'
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

The **`ceil()`** function in Lua's math library rounds up a given number to the smallest integer that is greater than or equal to the passed value. The given number can be a positive or negative number.

## Syntax

```pseudo
math.ceil(x)
```

- `x`: The number to be rounded up.

## Example

In this example, `math.ceil()` is used to round a pair of values.

```lua
local num1 = 14.4
local num2 = -22.5

local ceilNum1 = math.ceil(num1)
local ceilNum2 = math.ceil(num2)

print(ceilNum1)
print(ceilNum2)
```

This will result in the following output:

```shell
15
-23
```
