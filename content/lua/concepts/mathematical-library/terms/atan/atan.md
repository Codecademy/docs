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

The **`atan()`** function in Lua's math library evaluates the arctangent (inverse tangent) of a given number. The arctangent is the angle in radians (this is the answer returned) whose tangent is equal to the given value.

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

print("The Arctangent of", x, "is", answer)
```

This will result in the following output below. The answer is approximately 0.785 radians or 45 degrees.

```shell
The Arctangent of 1	is 0.78539816339745
```