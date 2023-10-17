---
Title: 'maxinteger'
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

In Lua, the **`math.maxinteger`** is a constant that is part of the Lua `math` library. The `math.maxinteger` constant is used to return the largest possible integer value.

> **Note:** The `math.maxinteger` constant is only available in Lua 5.3 and above. For earlier versions of Lua, the `math.huge` constant is available instead.

## Syntax

As `maxinteger` is a part of the standard Lua `math` library, it must be called as `math.maxinteger`.

```pseudo
math.maxinteger
```

## Example

To find the largest possible integer value in Lua:

```lua
print(math.maxinteger)
```

This results in something like the following output:

```shell
9007199254740991
```
