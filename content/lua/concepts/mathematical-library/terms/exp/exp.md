---
Title: 'exp()'
Description: 'Used to calculate the exponential value of a number.'
Subjects:
  - 'Computer Science'
  - 'Lua'
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

In Lua, the **`math.exp()`** function is a standard function that is part of the Lua `math` library. The `math.exp()` function is used to calculate the exponential value of a number, i.e, the exponential constant 'e' (which is roughly equal to 2.718281828459045...) raised to a given value. Exponents are a very common part of mathematical operations across a wide variety of fields and disciplines such as physics, engineering, probability and statistics, and even machine learning! This means that the `math.exp()` function is a very useful and widely applicable tool for Lua developers.

As a side-note, the **`math.log()`** function in the math library returns the inverse of the `math.exp()` function.

## Syntax

As `.exp()` is a method that is a part of the standard Lua Math library, to use this function it must be called as `math.exp()`

```pseudo
math.exp(mycoolvalue) -- returns the result of e raised to the power of mycoolvalue
```

## Example

```lua
-- This function returns e raised to the power of a given value

math.exp(0) -- This returns 1, as e raised to the power 0 equals 1
math.exp(1) -- 2.718281828459
math.exp(8) -- 2980.9579870417

-- as math.log() returns the inverse of math.exp()
math.log(2980.9579870417) -- 8

```
