---
Title: 'ult()'
Description: 'Compares the absolute value of two integers and returns true if the first is less than the second.'
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

The **`ult()`** method takes two integers as arguments and compares their absolute values. The method will return `true` if and only if the first value is less than the second value. Otherwise, it will return `false`.

## Syntax

The syntax of `ult()` is as follows:

```pseudo
math.ult(int1, int2)
```

Where `int1` and `int2` are the integer arguments to be compared.

## Examples

The following examples illustrate the behavior of `ult()`:

```lua
print(math.ult(5,6))
print(math.ult(5,-6)) --lua will convert '-6' to the unsigned integer '6' when performing this call
print(math.ult(5,5))
print(math.ult(5,4))
```

This results in the output:

```shell
true
true
false
false
```
