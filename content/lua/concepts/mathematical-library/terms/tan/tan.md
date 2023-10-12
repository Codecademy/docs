---
Title: 'tan()'
Description: 'Calculates the tangent of an angle.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

In Lua, the **`math.tan()`** function is a standard mathematical function that is part of the Lua `math` library. It is used to calculate the tangent of a given angle.

> **Note:** `math.tan()` expects the input angle value to be in radians. If an angle's value is in degrees, it can be converted into radians using the **math.pi** constant in Lua and the following formula: `radians = degrees * (math.pi / 180)`

## Syntax

```pseudo
math.tan(myangle)
```

## Example 1

To find the tangent of a `45` degree angle, first convert it into radians. Then pass the value to the `math.tan()` function, as shown in the following example:

```lua
local angle = 45 * ( math.pi / 180 )
print(math.tan(angle))
```

This results in the following output:

```shell
1.0
```

## Example 2

To find the tangent of an angle in radians, simply pass in the radian value as the input. This is shown in the following example:

```lua
print(math.tan(math.pi / 6))
```

This will yield the following output:

```shell
0.57735026918963
```
