---
Title: 'abs()'
Description: 'Converts given number to absolute value'
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

The **`abs()`** function in Lua's math library converts a number  to its absolute value.

## Syntax

```pseudo
math.abs(number)
```

- `number`: The number.

## Example

In this example, `math.abs()` converts -5 to 5.

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