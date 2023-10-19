---
Title: 'tointeger()'
Description: 'Used to convert a given value to an integer if possible.'
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

In Lua, the **`math.tointeger()`** function is a standard function that is part of the Lua `math` library. It is used to convert a given value to an integer, if the given value _is convertible_ to an integer.

> **Note:** `math.tointeger()` was introduced in Lua 5.3. Earlier verisons of Lua will not have this function as a standard part of their `math` library.

## Syntax

As `tointeger()` is a method that is a part of the standard Lua `math` library, it must be called as `math.tointeger()`.

```pseudo
math.tointeger(mycoolvalue)
```

`math.tointeger()` returns an integer, if `mycoolvalue` is convertible to an integer. Otherwise returns nil.

## Example 1

If the given value is an integer, `math.tointeger()` returns the given value, as in the following example:

```lua
print(math.tointeger(123))
```

This results in the following output:

```shell
123
```

## Example 2

If the given value is not an integer but is convertible to an integer, the integer value is returned. This is shown in the following example:

```lua
print(math.tointeger('123'))
```

This will yield the following output:

```shell
123
```

## Example 3

If the given value cannot be converted to an integer, `math.tointeger()` returns `nil`, as shown in the following example:

```lua
print(math.tointeger('I am not an integer value'))
```

This results in the following output:

```shell
nil
```
