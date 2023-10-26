---
Title: 'cos()'
Description: 'Returns the cosine of an angle represented in radians.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Math'
  - 'Numbers'
  - 'Arithmetic'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`cos()`** function returns the cosine of an angle given in radians.

## Syntax

```pseudo
$result = math.cos(angle);
```

`result`: The variable to store the output of the cosine operation.
`angle`: The angle in radians.

## Example

The example below demonstrates the use of the `math.cos()` function to find the cosine of a 45-degree angle.

```lua
local angle = (math.pi / 4)  -- 45 degrees in radians
local cosineOutput = math.cos(angle)

print(cosineOutput)
```

This example will result in the following output:

```shell
0.70710678118655
```
