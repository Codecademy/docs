---
Title: 'maxinteger()'
Description: 'Returns the largest possible integer value.'
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

In Lua, the **`math.maxinteger()`** function is a standard function that is part of the Lua `math` library. The `math.maxinteger()` function is used to return the largest possible integer value.

> **Note:** The `math.maxinteger()` function is only available in Lua 5.3 and above. If you are using an earlier version of Lua, you can use the `math.huge` constant instead.


## Syntax

As `maxinteger()` is a method that is a part of the standard Lua `math` library, it must be called as `math.maxinteger()`.

```pseudo
math.maxinteger() is a predefined constant that represents the maximum value that can be stored as an integer in Lua.
```


## Example 1

To find the largest possible integer value in Lua:

```lua
print(math.maxinteger())
```

This results in the following output:

```shell
9007199254740991
```


## Example 2

To clamp integer values to the maximum integer value in Lua:

```lua
local x = 9007199254740992
x = math.min(x, math.maxinteger())
print(x)
```

This results in the following output:

```shell
9007199254740991
```


## Example 3

With negative numbers, the `math.maxinteger()` function returns the largest possible negative integer value:

```lua
local x = -math.maxinteger() - 1
x = math.max(x, -math.maxinteger())
print(x)
```

This results in the following output:

```shell
-9007199254740991
```