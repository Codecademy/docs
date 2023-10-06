---
Title: 'floor()'
Description: 'Used to round down a value to the closest integer less than or equal to that value.'
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

In Lua, the **`math.floor()`** function is a standard function that is part of the Lua `math` library. The `math.floor()` function is used to round down a given value to its closest integer value that is less than or equal to the given value.

> **Note:** `math.floor()` always returns a value equal to or less than the given value. It _does not_ round up under any circumstances. For example, `math.floor(2.999)` returns 2 as that is the closest integer value that is _less than or equal_ to 2.999. To round numbers in either direction, use `math.round()`.

## Syntax

As `floor()` is a method that is a part of the standard Lua `math` library, it must be called as `math.floor()`.

```pseudo
math.floor(mycoolvalue) -- Returns the closest integer value that is less than or equal to mycoolvalue
```

## Example 1

To find the closest integer less than or equal to 1.234:

```lua
print(math.floor(1.234))
```

This results in the following output:

```shell
1
```

## Example 2

It is important to remember that `math.floor()` does not perform rounding, as in the following example:

```lua
print(math.floor(2.999))
```

This will yield the following output:

```shell
2
```

## Example 3

When working with negative numbers, it is important to remember that `math.floor()` returns the closest integer _less than or equal_ to a given value:

```lua
print(math.floor(-4.56))
```

This results in the following output:

```shell
-5
```
