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
s = string.char(97)
print(s)
s = string.char(122)
print(s)
s = string.char(125)
print(s)
```

This example results in the following output:

```shell
a
z
}
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
