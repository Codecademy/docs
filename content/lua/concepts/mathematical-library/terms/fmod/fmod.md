---
Title: 'fmod()'
Description: 'Returns the remainder of the quotient of two arguments.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The method **`fmod()`** takes two numbers and returns the remainder of the first number divided by the second number.

## Syntax

The syntax of `fmod()` is as follows:

```pseudo
math.fmod(num1, num2)
```

Where `num1` is the value to be divided by `num2`.

## Examples

The following examples illustrate the behavior of `fmod()`:

```lua
print(math.fmod(6, 4))
print(math.fmod(4, 6))
print(math.fmod(12, 4))
print(math.fmod(8.04829, 1))
print(math.fmod(4.63, 2.89))
print(math.fmod(0, 9))
```

This results in the output:

```shell
2
4
0
0.04829
1.74
0
```
