---
Title: 'mininteger'
Description: 'Returns the smallest possible integer value.'
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

**`math.mininteger`** is a constant that is part of Lua's `math` library. The `math.mininteger` constant is a constant representing the smallest value that can be possibly held by an integer.

> **Note:** The `math.mininteger` constant has the opposing functionality to the `math.maxinteger` constant which returns the highest value that can be held by an integer.

## Syntax

Since `mininteger` is a constant from Lua's library `math`, it is called as `math.mininteger`.

```pseudo
math.mininteger
```

## Example

To find the smallest possible integer value in Lua:

```lua
print(math.mininteger)
```

This results in something like the following output:

```shell
-9223372036854775808
```

It can be used when assigning a variable to a very small value:

```lua
local max = math.mininteger

if someValue > max then
    max = someValue
```
