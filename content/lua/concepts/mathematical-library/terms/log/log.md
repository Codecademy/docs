---
Title: 'log()'
Description: 'Calculates the natural logarithm of a number.'
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

The **`log()`** function in Lua's math library calculates the natural logarithm of a given number. The natural logarithm is to the base `e`, where `e` is Euler's number, an irrational constant approximately equal to 2.71828.

## Syntax

```pseudo
math.log(number)
```

- `number`: The number for which the natural logarithm is calculated.

## Example

In this example, `math.log()` calculates the natural logarithm of 20.

```lua
local num = 20
local result = math.log(num)

local output = string.format("The natural Logarithm of %.0f: %.4f", num, result)
print(output)
```

The result of the above example is shown below.

```shell
The natural Logarithm of 20: 2.9957
```
