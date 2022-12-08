---
Title: 'Modulo'
Description: 'A modulo operation takes two arguments and returns the remainder of the first argument divided by the second.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Numbers'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

**Modulo** is a mathematical operation that returns the remainder of a division of two arguments. It is available in every programming language.

## Syntax

The remainder is what is left over after dividing the first argument, the dividend, by the second, the divisor or modulus:

```pseudo
remainder = dividend % divisor
```

Most programming languages use the `%` symbol to represent the modulo operation, though some may use `mod` or other variations.

## Examples

The following is an example of the modulo operator in [Python](https://www.codecademy.com/resources/docs/python):

```codebyte/py
modulus = 14 % 5
print(f"14 % 5 results in a modulus of {modulus}")

modulus = 37 % 3
print(f"37 % 3 Results in a modulus of {modulus}")

modulus = 21 % 7
print(f"21 % 7 results in a modulus of {modulus}")

modulus = 15 % -4
print(f"15 % -4 results in a modulus of {modulus}")
```
