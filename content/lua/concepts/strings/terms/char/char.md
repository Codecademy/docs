---
Title: '.char()'
Description: 'Converts a decimal value to its character representation.'
Subjects:
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Values'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

In Lua, the **`string.char()`** function is used to convert a decimal value to its internal character value.

## Syntax

```pseudo
string.char(I)
```

In the above syntax, the identifier `I` represents the decimal value which will be converted into a character.

## Example 1

The following example uses the `string.char()` function to convert different decimal values to their associated character values:

```lua
x = 10
i = 0
while i <= x do
  s = string.char(97 + i)
  print(s)
  i = i + 1
end
```

This example results in the following output:

```shell
a
b
c
d
e
f
g
h
i
j
k
```

## Example 2

The `string.char()` function can take multiple arguments as well:

```lua
i = 97
s = string.char(i, i+1, i+2, i+3)
print(s)
```

This example results in the following output:

```shell
abcd
```
