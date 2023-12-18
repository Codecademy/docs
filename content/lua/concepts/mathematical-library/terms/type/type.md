---
Title: 'type()'
Description: 'Takes a number argument and returns its type.'
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

The **`type()`** method takes an argument and returns a value corresponding to the type of that argument in the following manner:

- If the value of the argument is an integer, `"integer"` will be returned.
- If the value of the argument is a float, `"float"` will be returned.
- For all other values, `nil` will be returned.

## Syntax

The syntax of `type()` is as follows:

```pseudo
math.type(arg)
```

Where `arg` is the argument to be checked for its type.

## Examples

The following examples illustrate the behavior of `type()`:

```lua
print(math.type(5))
print(math.type(6.3))
print(math.type(-9))
print(math.type("fugazzi"))
```

This results in the output:

```shell
integer
float
integer
nil
```
