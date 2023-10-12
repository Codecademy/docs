---
Title: 'atan()'
Description: 'Calculates the arctangent (inverse tangent) of a given number.'
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

The **`atan()`** function in Lua's math library evaluates the arctangent (inverse tangent) of a given number. The arctangent is the angle in radians (the answer returned) whose tangent is equal to the given value.

## Syntax

```pseudo
math.atan(x)
```

- `x`: The number representing the tangent.

## Example

In this example, `math.atan()` calculates the arctangent of 1.

```lua
local x = 1
local answer = math.atan(x)

local output = string.format("The arctangent of %.2f is approximately %.4f", x, answer)
print(output)
```

This will result in the following output below.

```shell
The arctangent of 1.00 is approximately 0.7854
```
