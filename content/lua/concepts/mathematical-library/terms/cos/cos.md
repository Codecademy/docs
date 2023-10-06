---
Title: 'cos()'
Description: 'Returns the cosine of an angle represented in radians.'
Subjects:
  - 'Computer Science'  
Tags:
  - 'Functions'
  - 'Math'
  - 'Numbers'
  - 'Arithmetic'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`cos()`** function evaluates the cosine of an angle in radians.

## Syntax

```pseudo
$result = math.cos(angle);
```

`result`: The variable to store the output of the cosine operation.
`math`: The standard Lua math library.
`cos()`: The cosine function.
`angle`: The angle in radians for which you want to calculate the cosine.

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

## Codebyte Example

The codebyte below uses the `cos()` function to find the cosine of five angles in an array using a for loop. 

```codebyte/lua
-- Calculate the cosine of five angles

local angles = {0, math.pi / 6, math.pi / 4, math.pi / 3, math.pi / 2}

for i, angle in ipairs(angles) do

    local cosineValue = math.cos(angle)
    print("Cosine of angle " .. angle .. " radians is: " .. cosineValue)

end

```
