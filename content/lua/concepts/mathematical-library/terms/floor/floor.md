---
Title: 'Floor'
Description: 'Floor is a method used to round down a value to the closest integer less than or equal to that value.'
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

In Lua, the **math.floor()** function is a standard function that is part of the Lua 'math' library. The math.floor() function is used to round down a given value to its closest integer value that is less than or equal to the given value.

As a side note, math.floor() returns a whole number that is less than or equal to a given value, but it _does not_ round up to the nearest number. For example, math.floor(2.999) returns 2 as that is the closest integer value that is _less than or equal_ to 2.999. To round numbers, use math.round().

## Syntax

As .floor() is a method that is a part of the standard Lua Math library, to use this function it must be called as 'math.floor()'

```lua

math.floor(mycoolvalue) -- returns the closest integer value that is less than or equal to mycoolvalue

```

## Example

```lua

math.floor(1.234) -- returns 1
math.floor(2.999) -- returns 2 as the integer value must be LESS THAN or EQUAL to the given value

-- as this function returns the closest integer that is less than or equal to the given value
math.floor(-3.356) -- returns -4 as -4 is less than -3

```
