---
Title: 'abs()'
Description: 'Returns the absolute value of a given number.'
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

The **`abs()`** function in Lua's math library returns the absolute value of a given number.

## Syntax

```pseudo
math.abs(number)
```

- `number`: The number to be addressed.

## Example

This example demonstrates a basic implementation of `math.abs()`.

```lua
local x = -5
local answer = math.abs(x)

local output = string.format("Absolute value %.0f is %.4f", x, answer)
print(output)
```

This will result in the following output below.

```shell
Absolute value -5 is 5.0000
```
