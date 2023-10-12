---
Title: 'tan()'
Description: 'Used to calculate the tangent of an angle.'
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

In Lua, the **`math.tan()`** function is a standard mathematical function that is part of the Lua `math` library. The `math.tan()` function is used to calculate the tangent of a given angle.

> **Note:** `math.tan()` expects the input angle value to be in _radians_. If you have an angle value in degrees, you can convert it into radians using the the **math.pi** constant in Lua and the following formula: `radians = degrees * (math.pi / 180)`

## Syntax

As `tan()` is a method that is a part of the standard Lua `math` library, it must be called as `math.tan()`.

```pseudo
math.tan(mycoolangle) -- Returns the tangent value for the given angle
```

## Example 1

To find the tangent of a 45 degree angle, first convert it into radians. Then pass the value to the `math.tan()` function, as shown in the following example:

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
