---
Title: 'floor()'
Description: 'Used to round down a value to the closest integer less than or equal to that value.'
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

In Lua, the **`math.floor()`** function is a standard function that is part of the Lua `math` library. The `math.floor()` function is used to round down a given value to its closest integer value that is less than or equal to the given value.

> **Note:** `math.floor()` returns a whole number that is less than or equal to a given value, but it _does not_ round up to the nearest number. For example, `math.floor(2.999)` returns 2 as that is the closest integer value that is _less than or equal_ to 2.999. To round numbers, use `math.round()`.

## Syntax

As `.floor()` is a method that is a part of the standard Lua `math` library, to use this function it must be called as `math.floor()`

```pseudo
math.floor(mycoolvalue) -- returns the closest integer value that is less than or equal to mycoolvalue
```

## Example 1

To find the closest integer less than or equal to 1.234,

```lua
print(math.floor(1.234))
```

This results in the following output:

```shell
1
```

## Example 2

It is important to remember that `math.floor()` does not perform rounding. So the following example:

```lua
print(math.floor(2.999))
```

results in the following output:

```shell
2
```

This returns 2 as the output because the integer value must be less than or equal to the given value.

## Example 3

When working with negative numbers, it is important to remember that `math.floor()` returns the closes integer _less than or equal_ to a given value

```lua
print(math.floor(-4.56))
```

This results in the following output:

```shell
-5
```

This is because -5 is less than -4.
