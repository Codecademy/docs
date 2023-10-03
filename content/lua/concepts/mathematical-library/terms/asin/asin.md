---
title: Lua .asin() Method
---

## Syntax

````lua
math.asin(x)

### Description

The `.asin()` method in Lua returns the arcsine (inverse sine) of `x`. The arcsine of `x` is the angle whose sine is `x`. The result is given in radians and is within the range of [-π/2, π/2].

### Parameters

- `x` (number): A numeric value representing the sine of an angle. It should be a number between -1 and 1, inclusive.

### Returns

- Returns the arcsine of `x` in radians.

## Example

```lua
-- Calculate the arcsine of a sine value
local sineValue = 0.5
local arcsine = math.asin(sineValue)

-- Print the result
print("The arcsine of " .. sineValue .. " is " .. arcsine)
````
