---
Title: 'lower()'
Description: 'Returns a copy of the string given, with all uppercase characters transformed to lowercase.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Values'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`string.lower()`** function receives a string and returns a transformed copy with all uppercase letters changed to lowercase, and all other characters unchanged. Uppercase characters are defined by the current locale.

## Syntax

```pseudo
string.lower( s )
```

Where `s` is a string.

Returns a copy of `s` with letters that are uppercase in the current locale converted to lowercase. The string `s` is unmodified.

## Example

The code below demonstrates a basic implementation of the `string.lower()` function.

```lua
stringvar = string.lower("HOw Now Brown CoW?")
print(stringvar)
```

This will result in the following output:

```shell
how now brown cow?
```
